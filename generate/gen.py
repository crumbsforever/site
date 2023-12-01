from openai import OpenAI

client = OpenAI(api_key="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")

# Replace 'your_api_key_here' with your actual API key


def generate_content(name, description, max_tokens=200):

    prompt="""
Write an blog article about this type of a cookie:

Title: {TITLE}
Description: {DESCRIPTION}

Make sure the tone is super positive and exciting with perky emojis. Include the feeling or words such as: dessert, family, magical moments, tasty treat, etc.
    """.replace('{TITLE}', name).replace('{DESCRIPTION}', description)

    response = client.completions.create(model="text-davinci-002",
    prompt=prompt,
    max_tokens=max_tokens,
    n=1,
    stop=None,
    temperature=0.8)

    return response.choices[0].text.strip()

# Example usage
content = generate_content(
    name="Semi-Sweet Chocolate Chunk",
    description="Chocolate chip, but make it chunky—a delicious cookie filled with irresistible semi-sweet chocolate chunks and a sprinkle of flaky sea salt."
)
print(content)
