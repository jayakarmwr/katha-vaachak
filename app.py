from flask import Flask, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline
from transformers import logging
import torch

# Suppress warnings
logging.set_verbosity(logging.CRITICAL)

# Initialize Flask app
app = Flask(__name__)

# Load model and tokenizer once when the server starts
model = AutoModelForCausalLM.from_pretrained(
    "Sr33ja/kathavachak-7b",
    device_map="auto",
)
tokenizer = AutoTokenizer.from_pretrained("Sr33ja/kathavachak-7b")
pipe = pipeline(task="text-generation", model=model, tokenizer=tokenizer)

@app.route('/generate_story', methods=['POST'])
def generate_story():
    # Parse JSON request
    data = request.json
    genre = data.get("genre")
    title = data.get("title")
    plot_details = data.get("plot_details")
    
    if not all([genre, title, plot_details]):
        return jsonify({"error": "All fields (genre, title, plot_details) are required"}), 400

    # Create the story prompt
    prompt = f"""
    You are a creative and skilled storyteller. Based on the following inputs, generate a detailed, engaging, and well-structured story:

    - *Genre*: {genre}
    - *Story Title*: "{title}"
    - *Plot Details*: {plot_details}

    Guidelines:
        1. The story should follow the conventions of the {genre} genre.
        2. Begin the story with an intriguing opening based on the provided title.
        3. Develop the plot to include the provided details and tie them together into a cohesive narrative.
        4. Create vivid, relatable characters and natural dialogue.
        5. Provide a clear beginning, middle, and end, ensuring the story builds tension and resolves.

        After the story, generate a Storyline:
        - Create 2-3 prompts for visual illustrations based on key moments in the story.
        - Ensure the character features and settings are consistent across the prompts.
        - Each prompt should describe a distinct scene with vivid details.
        
        Now, create the story followed by the storyline prompts:
    """

    # Generate story
    result = pipe(f"<s>[INST] {prompt} [/INST]", num_return_sequences=1, max_length=1000)
    generated_text = result[0]['generated_text']

    # Extract storyline prompts
    def extract_storyline(generated_text):
        if "Storyline:" in generated_text:
            storyline_part = generated_text.split("Storyline:")[-1].strip()
            return storyline_part.split("\n")[:3]
        return []

    storyline = extract_storyline(generated_text)

    # Return JSON response
    return jsonify({
        "story": generated_text,
        "storyline_prompts": storyline
    })

if __name__ == '__main__':
    app.run(debug=True)