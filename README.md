
## colorpal

make your life more colorful with colorpal.

Inspiration:

Makeup colors can have very funky names that are not great at identifying the true shade of a color. This can make makeup and products in general hard to trust for people who have color blindness. We hoped to solve this problem by making colors in a makeup palette more accessible through a program that will determine shades for you by giving you a simple description instead of an abstract name. Additionally, with the current popularity of your "personal color" and online shopping, this idea could further extend to help people simplify the process of identifying the right colors for themselves.

What it does:

Upload an image input of a makeup palette, colorpal uses AI to produce a concise description of the color, overlaid on your original picture. Allowing for easy matching and color identification of the makeup palette.

How we built it:

The web app is built with a Python backend and is connected to a React frontend. It accepts a photo of a makeup palette and sends it to the Python backend. OpenCV is used to isolate the location of shades in the makeup palette, isolating them from the packaging. These locations are sent to PIL, which determine the average color of each shape in RGB value. These values are translated into descriptive text using ChatGPT, and the user will receive a photo of their makeup palette with the text overlaid on each shade.

What's next for Colorpal:

Extending the uses of identifying color codes to match your "color profile" or having collections to sort and track different colors. Potentially could have saved colors so one could compare the colors from makeup or products they already have with a new product.
