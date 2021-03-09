const meals = [
    {
        id: 0,
        name: 'Beef & Broccoli',
        image: 'assets/images/beefAndBroccoli.png',
        almond: false,
        avocado:false,
        beef: true,
        blueberries: false,
        broccoli: true,
        darkChocolate: false,
        darkLeafyGreens: false,
        eggs: false,
        extraVirginOliveOil: false,
        salmon: false,
        description: "This Broccoli Beef satisfies my craving for Chinese takeout but with less oil and sugar than you'll find at most restaurants",
        directions: [
            'Season the beef with white pepper.',
            'In a small bowl, whisk together the soy sauce, brown sugar, garlic, ginger, and cornstarch, if using. Set aside.',
            'In a large nonstick skillet over high hear, warm 1/2 tablespoon of the sesame oil until just smoking. Add the beef and cook, stirring occasionally, until the meat is just about cooked through. Transfer to a plate and set aside.',
            'Add the remaining 1/2 tablespoon of oil to the skillet, then add the onions and cook until they are softened, about 8 minutes.',
            'Add the blanched and drained broccoli and cook for 1 minute. Then add the reserved sauce and stir to coat.',
            'Return the beef to the skillet and continue to cook until the beef is cooked through and the sauce has reduced slightly, about 3 minutes more.',
            'Transfer to serving plates over rice or veggie rice. Sprinkle with sesame seeds and scallions.'
        ],
        ingredients: [
            '1 pound of flank steak',
            '1/2 teaspoon ground white pepper',
            '1/2 cup soy sauce or gluten-free tamari',
            '1 tablespoon brown sugar',
            '5 cloves garlic, minced',
            '1 one-inch piece of fresh ginger, peeled and grated',
            '1 tablespoon cornstarch - optional',
            '1 tablespoon sesame oil',
            '1/2 yellow onion, sliced',
            '1 large head of broccoli, cut into florets and blanched',
            'cooked rice or cauliflower rice',
            '1 tablespoon toasted sesame seeds',
            '3 scallions, sliced on the bias'
        ]
    
    },
    {
        id: 1,
        name: 'Greek Salad',
        image: '',
        almond: false,
        avocado:true,
        beef: false,
        blueberries: false,
        broccoli: false,
        darkChocolate: false,
        darkLeafyGreens: true,
        eggs: true,
        extraVirginOliveOil: true,
        salmon: true,
        description: "This salad is a favorite of my mine and my spouse. It is filling, healthy and easily converted in a meal prep for the whole week.",
        directions: [
            'Hard boil the number of eggs desired for your salad.',
            'Place dark leafy greens in a bowl, or container. Wash if needed.',
            'Cook salmon in a skillet.',
            'Prepare avocado.',
            'Prepare dressing by placing the following in a container and mixing: 1/2 cup of extra virgin olive oil, juice of 1 lemon, 2 teaspoons dried oregano, 2 tablespoons red wine vinegar, 1 teaspoon dijon mustard, 1/2 teaspoon granulated garlic, salt and pepper to taste.',
            'Place salmon on the dark leafy green salad.',
            'Add the hard boiled egg to your salad.',
            'Add the avocado to your salad.',
            'Add the amount of desired dressing on the salad.'
        ],
        ingredients: [
           'Number of desired eggs',
           'Enough dark leafy greens for your salad(s)',
           'Enough salmon for your salad(s)',
           'Enough avocados for your salad(s)',
           '1/2 cup of extra virgin olive oil', 
           'juice of 1 lemon', 
           '2 teaspoons dried oregano', 
           '2 tablespoons red wine vinegar', 
           '1 teaspoon dijon mustard', 
           '1/2 teaspoon granulated garlic', 
           'salt and pepper to taste'
        ]
    
    },
    {
        id: 3,
        name: 'Slow Cooker Blueberry Slump',
        image: '/assets/images/blueberrySlump.jpeg',
        almond: false,
        avocado:false,
        beef: false,
        blueberries: true,
        broccoli: false,
        darkChocolate: false,
        darkLeafyGreens: false,
        eggs: false,
        extraVirginOliveOil: false,
        salmon: false,
        description: "Cobblers, crisps, buckles, slumps are all similar - they're warm desserts with fruit on the bottom and some sort of sweet topping. This is a fun twist on the idea with alternatives for gluten-free and dairy-free ingredients.",
        directions: [
            'For the fruit: coat a 5 or 6 quart slow cooker with ghee or coconut oil. Combine the blueberries, 1/3 cup sugar, arrowroot powder, and lemon zest in the slow cooker',
            'For the topping: In a medium bowl, whisk together the gluten-free flour, 1/3 cup raw sugar, baking powder, lemon zest, and salt. Using a fork or a pastry blender, cut in the ghee until it resembles course crumbs.',
            'In a small bowl, combine almond milk and vanilla. Add it to the flour mixture and stir with a spatula until combined. Spoon the topping over the blueberries and spread it out evenly.',
            'Cover and cook on low for 4 hours, until the blueberries are bubbling and the topping is set. Let stand for 20 minutes before serving.'

        ],
        ingredients: [
           'Ghee',
           '5 cups of blueberries',
           '2/3 cup of raw sugar',
           '1 tablespoon of arrowroot powder',
           '1 teaspoon grated lemon zest',
           '3/4 cup of gluten-free flour',
           '1 1/2 teaspoon baking powder',
           '1/2 teaspoon grated lemon zest',
           'pinch of salt',
           '2 tablespoons of whipped ghee',
           '1/2 cup of almond milk',
           '1 teaspoon vanilla extract'
        ]
    
    },
    // {
    //     id: ,
    //     name: '',
    //     image: '',
    //     almond: false,
    //     avocado:false,
    //     beef: false,
    //     blueberries: false,
    //     broccoli: false,
    //     darkChocolate: false,
    //     darkLeafyGreens: false,
    //     eggs: false,
    //     extraVirginOliveOil: false,
    //     salmon: false,
    //     description: " ",
    //     directions: [
            
    //     ],
    //     ingredients: [
           
    //     ]
    
    // }
]

export default meals;