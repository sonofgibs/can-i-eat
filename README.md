# Can I Eat This?

The purpose of this API is to retrieve edibility of plant species from pictures. If a plant is edible, a recipe will be returned as well. Edibility is determined via different parts of each plant ( flowers, fruits, bark, roots, etc).

The API makes a call to Plant ID to retrieve plant identification and then uses the plant's scientific name to retrieve edibility and recipe information from the linked `plantinformation`S3 bucket.

### Utilizes

Plant Identification: https://web.plant.id/plant-identification-api/

Plant Recipes: https://www.ediblewildfood.com/

## Necessary Disclaimer

This project only determines potential edibility of plant species and is just a for-joy project. Errors in identifiaction may occur, especially with our fungus friends. Please think before you eat; insects, bacteria, and viruses are abound!
