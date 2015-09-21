/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';


var User = require('../api/user/user.model');

User.find({}).remove(function () {
  User.create(
    {
      provider: 'local',
      name: 'Digital Sismo Design',
      email: 'digital@sismodesign.com',
      password: 'sismo'
    }
    ,
    {
      provider: 'local',
      role: 'admin',
      name: 'Vamara',
      email: 'vamara@sismodesign.com',
      password: 'vamara'
    },
    {
    provider: 'local',
      role: 'admin',
      name: 'Kevin',
      email: 'kevin@sismodesign.com',
      password: 'kevin'
   }, function () {
      console.log('finished populating users');
    }
  );
});

//Publishing color value
var Color = require('../api/color/color.model');
Color.find({}).remove(function () {
  Color.create(
    {
      name: 'Vert clair',
      value: 'Vert clair'
    },
    {
      name: 'Vert plat',
      value: 'Vert plat'
    },
    {
      name: 'Blanc',
      value: 'Blanc'
    },
    {
      name: 'Multicouleurs pâle',
      value: 'Multicouleurs pâle'
    },
    {
      name: 'Poudrées',
      value: 'Poudrées'
    },
    {
      name: 'Nude',
      value: 'Nude'
    },
    {
      name: 'Mates',
      value: 'Mates'
    },
    {
      name: 'Rouge écarlate passion',
      value: 'Rouge écarlate passion'
    },
    {
      name: 'Rouge noir',
      value: 'Rouge noir'
    },
    {
      name: 'Cuivré',
      value: 'Cuivré'
    },
    {
      name: 'Poupre',
      value: 'Poupre'
    },
    {
      name: 'Orange intense',
      value: 'Orange intense'
    },
    {
      name: 'Rouge franc',
      value: 'Rouge franc'
    },
    {
      name: 'Pastel & aquarelle',
      value: 'Pastel & aquarelle'
    },
    {
      name: 'Couleurs vives & brillantes',
      value: 'Couleurs vives & brillantes'
    },
    {
      name: 'Ivoire & blanc',
      value: 'Ivoire & blanc'
    },
    {
      name: 'Aquarelles pales multicolor',
      value: 'Aquarelles pales multicolor'
    },
    {
      name: 'Vert pale',
      value: 'Vert pale'
    },
    {
      name: 'Vert pale & aquarelle',
      value: 'Vert pale & aquarelle'
    },
    {
      name: 'Bleu aigue marine',
      value: 'Bleu aigue marine'
    },
    {
      name: 'Bleu marine',
      value: 'Bleu marine'
    },
    {
      name: 'Blanc satiné & ivoire',
      value: 'Blanc satiné & ivoire'
    },
    {
      name: 'Nude Tones & Mat',
      value: 'Nude Tones & Mat'
    },
    {
      name: 'Rouge cramoisi',
      value: 'Rouge cramoisi'
    },
    {
      name: 'Rose vif aquarelle',
      value: 'Rose vif aquarelle'
    },
    {
      name: 'Rose laque & lumière vive',
      value: 'Rose laque & lumière vive'
    },
    {
      name: 'Crémeux & ivoire',
      value: 'Crémeux & ivoire'
    },
    {
      name: 'Or & laque rouge',
      value: 'Or & laque rouge'
    },
    {
      name: 'Noir & beige crémeux',
      value: 'Noir & beige crémeux'
    },
    {
      name: 'Rose vif',
      value: 'Rose vif'
    }
    ,
    {
      name: 'Rose vif & violine',
      value: 'Rose vif & violine'
    }
    ,
    {
      name: 'Rose bonbon',
      value: 'Rose bonbon'
    }
    ,
    {
      name: 'Peau de pêche & abricot',
      value: 'Peau de pêche & abricot'
    }
    ,
    {
      name: 'Rose pink à rose abricot',
      value: 'Rose pink à rose abricot'
    }
    ,
    {
      name: 'Rose pink de parme à rose',
      value: 'Rose pink de parme à rose'
    }
    ,
    {
      name: 'Rose pâle',
      value: 'Rose pâle'
    },
    {
      name: 'Rose intense',
      value: 'Rose intense'
    }
    , function () {
      console.log('finished populating colors');
    }
  );
});
//Publishing place value
var Place = require('../api/place/place.model');
Place.find({}).remove(function () {
  Place.create(
    {
      name: 'Interieur',
      value: 'Interieur'
    },
    {
      name: 'Exterieur',
      value: 'Exterieur'
    },
    {
      name: 'Reflets',
      value: 'Reflets'
    },
    {
      name: 'Brillant',
      value: 'Brillant'
    },
    {
      name: 'Embruns & sable',
      value: 'Embruns & sable'
    },
    {
      name: 'Sous bois',
      value: 'Sous bois'
    },
    {
      name: 'Ville lumière jour',
      value: 'Ville lumière jour'
    }
    ,
    {
      name: 'Pariries , Matin d\'été',
      value: 'Pariries , matin d\'été'
    }
    ,
    {
      name: 'Soir intérieur',
      value: 'Soir intérieur'
    }
    ,
    {
      name: 'Intérieur nuit',
      value: 'Intérieur nuit'
    },
    {
      name: 'Extérieur jour , plage , mer',
      value: 'Extérieur jour , plage , mer'
    },
    {
      name: 'Extérieur jour pleine lumière',
      value: 'Extérieur jour pleine lumière'
    },
    {
      name: 'Extérieur démi-Jour',
      value: 'Extérieur démi-Jour'
    },
    {
      name: 'Intérieur jour',
      value: 'Intérieur jour'
    },
    {
      name: 'Extérieur jour',
      value: 'Extérieur jour'
    },
    {
      name: 'Intérieur démi jour',
      value: 'Intérieur démi jour'
    },
    {
      name: 'Extérieur lumière matin',
      value: 'Extérieur lumière matin'
    },
    {
      name: 'Extérieur jour',
      value: 'Extérieur jour'
    },
    {
      name: 'Extérieur démi jour',
      value: 'Extérieur démi jour'
    },
    {
      name: 'Extérieur plein jour',
      value: 'Extérieur plein jour'
    }
    ,
    {
      name: 'Intérieur nuit',
      value: 'Intérieur nuit'
    },
    {
      name: 'Extérieur nuit',
      value: 'Extérieur nuit'
    },
    function () {
      console.log('finished populating place');
    }
  )
});
//Publishing taste value
var Taste = require('../api/taste/taste.model');
Taste.find({}).remove(function () {
  Taste.create(
    {
      name: 'Cru & salé',
      value: 'Cru & salé'
    },
    {
      name: 'Cru & tige & sève',
      value: 'Cru & tige & sève'

    }
    ,
    {
      name: 'Sacré & granité poires',
      value: 'Sacré & granité poires'

    }
    ,
    {
      name: 'Sucré & amande & sec',
      value: 'Sucré & amande & sec'

    }
    ,
    {
      name: 'Sucré & pulpe de fruit cuite',
      value: 'Sucré & pulpe de fruit cuite'

    }
    ,
    {
      name: 'Sucré & crème de vanille',
      value: 'Sucré & crème de vanille'

    }
    ,
    {
      name: 'Trace d\'amertume apéritive',
      value: 'Trace d\'amertume apéritive'

    }
    ,
    {
      name: 'Réglisse & sucré',
      value: 'Réglisse & sucré'

    }
    ,
    {
      name: 'Sucré & praliné & gianduja',
      value: 'Sucré & praliné & gianduja'

    }
    ,
    {
      name: 'Salé',
      value: 'Salé'

    }
    ,
    {
      name: 'Aciduité',
      value: 'Aciduité'

    }
    ,
    {
      name: 'Sucré & confit',
      value: 'Sucré & confit'

    }
    ,
    {
      name: 'Fade & tiède',
      value: 'Fade & tiède'

    }
    ,
    {
      name: 'Aqueux & cru',
      value: 'Aqueux & cru'

    }
    ,
    {
      name: 'Douce amertume & désalterant',
      value: 'Douce amertume & désalterant'

    }
    ,
    {
      name: 'Amertume bitter & feuille froissée',
      value: 'Amertume bitter & feuille froissée'

    }
    ,
    {
      name: 'Amertume long drink',
      value: 'Amertume Long drink'

    },
    {
      name: 'Acidulé & sucré',
      value: 'Acidulé & sucré'

    }
    ,
    {
      name: 'Sucré & un peu Gras',
      value: 'Sucré & un peu Gras'

    }
    ,
    {
      name: 'Sucré & fruit rouges & noirs',
      value: 'Sucré & fruit rouges & noirs'

    }
    ,
    {
      name: 'Sucré & fruit aqueux melon pasteque',
      value: 'Sucré & fruit aqueux melon pasteque'

    }
    ,
    {
      name: 'Cru & épicé',
      value: 'Cru & épicé'

    }
    ,
    {
      name: 'Sucré & gras & vanillé & crémeux',
      value: 'Sucré & gras & vanillé & crémeux'

    },
    {
      name: 'Epicé & chaud',
      value: 'Epicé & chaud'

    },
    {
      name: 'Sucré & amertume chaude',
      value: 'Sucré & amertume chaude'

    },
    {
      name: 'Framboise & sucre',
      value: 'Framboise & sucre'

    },
    {
      name: 'Sucré & confiture fruit rouge',
      value: 'Sucré & confiture fruit rouge'

    },
    {
      name: 'Sucré & caramel',
      value: 'Sucré & caramel'

    },
    {
      name: 'Sucré & poudre de sucre',
      value: 'Sucré & poudre de sucre'

    }
    ,
    {
      name: 'Sucré & épicé & salivant & doux',
      value: 'Sucré & épicé & salivant & doux'

    },
    {
      name: 'Sucré & goutte de jus de litchi',
      value: 'Sucré & goutte de jus de litchi'

    },
    {
      name: 'Sucré & acidulé granny smith',
      value: 'Sucré & acidulé granny smith'

    },
    {
      name: 'Sucré & framboise & sirop de litchi',
      value: 'Sucré & framboise & sirop de litchi'

    }
    , function () {
      console.log('finished populating tastes');
    }
  )
});
//Publishing Olfactory value
var Olfactory = require('../api/olfactory/olfactory.model');
Olfactory.find({}).remove(function () {
  Olfactory.create(
    {
      name: 'Floral',
      value: 'Floral'
    },
    {
      name: 'Chypre',
      value: 'Chypre'

    },
    {
      name: 'Fresh',
      value: 'Fresh'

    },
    {
      name: 'Woody',
      value: 'Woody'

    },
    {
      name: 'Floriental',
      value: 'Floriental'

    },
    {
      name: 'Oriental',
      value: 'Oriental'

    },
    {
      name: 'Woody',
      value: 'Woody'

    },
    {
      name: 'Aromatic',
      value: 'Aromatic'

    },
    {
      name: 'Fresh',
      value: 'Fresh'

    },
    {
      name: 'Vert',
      value: 'Vert'

    },
    {
      name: 'Fruite',
      value: 'Fruite'

    }
    , {
      name: 'Gourmand',
      value: 'Gourmand'

    }, {
      name: 'Fruity',
      value: 'Fruity'

    },
    {
      name: 'Spicy',
      value: 'Spicy'

    },
    {
      name: 'Aquatic',
      value: 'Aquatic'

    },
    {
      name: 'Fougere',
      value: 'Fougere'

    }

    , function () {
      console.log('finished populating olfactory');
    }
  )
});
//Publishing Wake value
var Wake = require('../api/wake/wake.model');
Wake.find({}).remove(function () {
  Wake.create(
    {
      name: 'Léger',
      value: 'Léger'
    },
    {
      name: 'Affirmé',
      value: 'Affirmé'

    }
    , function () {
      console.log('finished populating wake');
    }
  )
});
//Publishing sound
var Sound = require('../api/sound/sound.model');
Sound.find({}).remove(function () {
  Sound.create(
    {
      name: 'Cristalin',
      value: 'Cristalin'
    },
    {
      name: 'Voix & rires jeunes',
      value: 'Voix & rires jeunes'
    },
    {
      name: 'Musique céleste',
      value: 'Musique céleste'
    },
    {
      name: 'Clarinette lente',
      value: 'Clarinette lente'
    }
    , {
      name: 'Solo de piano calme',
      value: 'Solo de piano calme'
    },
    {
      name: 'Disco',
      value: 'Disco'
    },
    {
      name: 'Voix de fille , voilée',
      value: 'Voix de Fille , voilée'
    },
    {
      name: 'Bruit de vagues douces',
      value: 'Bruit de vagues douces'
    },
    {
      name: 'Paririe',
      value: 'Paririe'
    },
    {
      name: 'Accordéon joyeux',
      value: 'Accordéon joyeux'
    },
    {
      name: 'Zen',
      value: 'Zen'
    },
    {
      name: 'Bruit de nature',
      value: 'Bruit de nature'
    },
    {
      name: 'Cristallin',
      value: 'Cristallin'
    },
    {
      name: 'Gouttes d\'eau sur vegétal',
      value: 'Gouttes d\'eau sur vegétal'
    }
    , function () {
      console.log('finished populating sound');
    }
  );
});
//Publishing level
var Level = require('../api/level/level.model');
Level.find({}).remove(function () {
  Level.create(
    {
      name: 'Pur',
      value: 'Pur'
    },
    {
      name: 'Frénétique',
      value: 'Frénétique'
    },
    {
      name: 'Combinaison',
      value: 'Combinaison'
    },
    {
      name: 'Calme',
      value: 'Calme'
    }
    , function () {
      console.log('finished populating level');
    }
  );
});
//Publishing densitivity
var Densitivity = require('../api/densitivity/densitivity.model');
Densitivity.find({}).remove(function () {
  Densitivity.create(
    {
      name: 'Nervuré',
      value: 'Nervure'
    },
    {
      name: 'Lisse',
      value: 'Lisse'
    },
    {
      name: 'Soft',
      value: 'Soft'
    }
    , function () {
      console.log('finished populating densitivity');
    }
  );
});
//Publishing sensitivity
var Sensitivity = require('../api/sensitivity/sensitivity.model');
Sensitivity.find({}).remove(function () {
  Sensitivity.create(
    {
      name: 'Mou',
      value: 'Mou'
    },
    {
      name: 'Dur',
      value: 'Dur'
    },
    {
      name: 'Souple',
      value: 'Souple'
    }
    , function () {
      console.log('finished populating sensitivity');
    }
  );
});
//Publishing light
var Light = require('../api/light/light.model');
Light.find({}).remove(function () {
  Light.create(
    {
      name: 'Jour',
      value: 'Jour'
    },
    {
      name: 'Nuit',
      value: 'Nuit'
    },
    {
      name: '(Demi)jour',
      value: '(Demi)jour'
    }
    , function () {
      console.log('finished populating light');
    }
  );
});
//Publishing gender
var Gender = require('../api/gender/gender.model');
Gender.find({}).remove(function () {
  Gender.create(
    {
      name: 'Homme',
      value: 'Homme'
    },
    {
      name: 'Femme',
      value: 'Femme'
    }
    , function () {
      console.log('finished populating gender');
    }
  );
});

//Publishing Perfume
var Parfum = require('../api/perfume/perfume.model');
Parfum.find({}).remove(function () {
  Parfum.create(

      {
        "name": "Anais Anais",
        "brand": "Cacharel",
        "thumb": "assets/images/ANAIS_ANAIS_Cacharel.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Floral",
            "id": 1
          },
          {
            "title": "crushed leaves",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Mou",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Frénétique",
            "id": 1
          }
        ],
        "sounds": [
          {
            "title": "Voix & rires jeunes",
            "id": 1
          }
        ],
        "tastes": [
          {
            "title": "Cru & tige & sève",
            "id": 2
          }
        ],
        "lights": [],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "blanc & vert pale",
            "id": 1
          }
        ]
      },
      {
        "name": "Délice",
        "brand": "Cacharel",
        "thumb": "assets/images/DELICE_CACHAREL.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Floral",
            "id": 1
          },
          {
            "title": "Fruity",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Dur",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Pur",
            "id": 1
          },
          {
            "title": "Frénétique",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Multicouleurs pâle",
            "id": 1
          },
          {
            "title": "Vert pale",
            "id": 2
          },
          {
            "title": "Rose pâle",
            "id": 3
          },
          {
            "title": "blanc & vert pale",
            "id": 4
          },
          {
            "title": "aqua green",
            "id": 5
          }
        ]
      },
      {
        "name": "Amor Amor",
        "brand": "Cacharel",
        "thumb": "assets/images/AMORAMOR_CACHAREL.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Floral",
            "id": 1
          },
          {
            "title": "sweet",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Mou",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [],
        "sounds": [],
        "tastes": [
          {
            "title": "sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Interieur",
            "id": 1
          },
          {
            "title": "Intérieur jour",
            "id": 2
          }
        ],
        "colors": [
          {
            "title": "Rouge écarlate passion",
            "id": 1
          }
        ]
      },
      {
        "name": "Fuel For Life",
        "brand": "Diesel",
        "thumb": "assets/images/FUELFORLIFE_DIESEL.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Woody",
            "id": 1
          },
          {
            "title": "Fruity",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Souple",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Calme",
            "id": 1
          }
        ],
        "sounds": [
          {
            "title": "Solo de piano calme",
            "id": 1
          }
        ],
        "tastes": [
          {
            "title": "Douce amertume & désalterant",
            "id": 1
          },
          {
            "title": "Amertume bitter & feuille froissée",
            "id": 2
          },
          {
            "title": "Amertume Long drink",
            "id": 3
          }
        ],
        "lights": [
          {
            "title": "Nuit",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Interieur",
            "id": 1
          },
          {
            "title": "Intérieur nuit",
            "id": 2
          }
        ],
        "colors": [
          {
            "title": "Cuivré",
            "id": 1
          }
        ]
      },
      {
        "name": "Loverdose",
        "brand": "Diesel",
        "thumb": "assets/images/LOVERDOSE_DIESEL.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "sweet",
            "id": 1
          },
          {
            "title": "Woody",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Mou",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Combinaison",
            "id": 1
          }
        ],
        "sounds": [
          {
            "title": "Disco",
            "id": 1
          }
        ],
        "tastes": [
          {
            "title": "sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Nuit",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Interieur",
            "id": 1
          },
          {
            "title": "Intérieur nuit",
            "id": 2
          },
          {
            "title": "Intérieur nuit",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Poupre",
            "id": 1
          },
          {
            "title": "Orange intense",
            "id": 2
          }
        ]
      },
      {
        "name": "Acqua Di Gioia",
        "brand": "Giorgio Armani",
        "thumb": "assets/images/AQUA_DI_GIOIA_ARMANI.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Fresh",
            "id": 1
          },
          {
            "title": "Woody",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Dur",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Pur",
            "id": 1
          },
          {
            "title": "Calme",
            "id": 2
          }
        ],
        "sounds": [
          {
            "title": "Gouttes d'eau sur vegétal",
            "id": 1
          }
        ],
        "tastes": [
          {
            "title": "Aciduité",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Bleu aigue marine",
            "id": 1
          }
        ]
      },
      {
        "name": "Code Dona",
        "brand": "Giorgio Armani",
        "thumb": "assets/images/CODE_DONA_ARMANI.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Floral",
            "id": 1
          },
          {
            "title": "sweet",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Mou",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [],
        "sounds": [],
        "tastes": [
          {
            "title": "sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Nuit",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur nuit",
            "id": 2
          }
        ],
        "colors": [
          {
            "title": "Blanc satiné & ivoire",
            "id": 1
          },
          {
            "title": "Ivoire & blanc",
            "id": 2
          },
          {
            "title": "Blanc",
            "id": 3
          }
        ]
      },
      {
        "name": "Sì",
        "brand": "Giorgio Armani",
        "thumb": "assets/images/SI_ARMANI.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Woody",
            "id": 1
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Mou",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [],
        "sounds": [],
        "tastes": [
          {
            "title": "sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Rouge cramoisi",
            "id": 1
          }
        ]
      },
      {
        "name": "Parisienne",
        "brand": "Yves Saint Laurent",
        "thumb": "assets/images/LA_PARISIENNE_YSL.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Floral",
            "id": 1
          },
          {
            "title": "Woody",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Mou",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Combinaison",
            "id": 2
          },
          {
            "title": "Pur",
            "id": 2
          },
          {
            "title": "Calme",
            "id": 3
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Rose vif aquarelle",
            "id": 1
          }
        ]
      },
      {
        "name": "Paris",
        "brand": "Yves Saint Laurent",
        "thumb": "assets/images/PARIS_YSL.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Floral",
            "id": 1
          },
          {
            "title": "Woody",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Dur",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Frénétique",
            "id": 1
          },
          {
            "title": "Combinaison",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Salé",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Rose laque & lumière vive",
            "id": 1
          }
        ]
      },
      {
        "name": "Manifesto",
        "brand": "Yves Saint Laurent",
        "thumb": "assets/images/MANIFESTO_YSL.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "sweet",
            "id": 1
          },
          {
            "title": "Floral",
            "id": 2
          },
          {
            "title": "Woody",
            "id": 3
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Souple",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Frénétique",
            "id": 1
          },
          {
            "title": "Combinaison",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Crémeux & ivoire",
            "id": 1
          }
        ]
      },
      {
        "name": "Opium",
        "brand": "Yves Saint Laurent",
        "thumb": "assets/images/OPIUM_YSL.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Floral",
            "id": 1
          },
          {
            "title": "sweet",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Souple",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Frénétique",
            "id": 1
          },
          {
            "title": "Combinaison",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Nuit",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Interieur",
            "id": 1
          },
          {
            "title": "Intérieur nuit",
            "id": 2
          },
          {
            "title": "Intérieur nuit",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Or & laque rouge",
            "id": 1
          }
        ]
      },
      {
        "name": "Black Opium",
        "brand": "Yves Saint Laurent",
        "thumb": "assets/images/BLACKOPIUM_YSL.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "sweet",
            "id": 1
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Souple",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Frénétique",
            "id": 1
          },
          {
            "title": "Combinaison",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "amer",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Nuit",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur nuit",
            "id": 2
          }
        ],
        "colors": [
          {
            "title": "Rouge noir",
            "id": 1
          },
          {
            "title": "Crémeux & ivoire",
            "id": 2
          }
        ]
      },
      {
        "name": "Trésor",
        "brand": "Lancôme",
        "thumb": "assets/images/TRESOR_LANCOME.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "sweet",
            "id": 1
          },
          {
            "title": "Fruity",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Souple",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Combinaison",
            "id": 1
          },
          {
            "title": "Frénétique",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Peau de pêche & abricot",
            "id": 1
          }
        ]
      },
      {
        "name": "Miracle",
        "brand": "Lancôme",
        "thumb": "assets/images/MIRACLE_LANCOME.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Floral",
            "id": 1
          },
          {
            "title": "Spicy",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Mou",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Pur",
            "id": 1
          },
          {
            "title": "Calme",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Acidulé",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Rose pink à rose abricot",
            "id": 1
          },
          {
            "title": "Rose bonbon",
            "id": 2
          },
          {
            "title": "Rose vif aquarelle",
            "id": 3
          },
          {
            "title": "Rose laque & lumière vive",
            "id": 4
          },
          {
            "title": "Rose vif",
            "id": 5
          },
          {
            "title": "Rose intense",
            "id": 6
          }
        ]
      },
      {
        "name": "La Vie Est Belle",
        "brand": "Lancôme",
        "thumb": "assets/images/LA_VIE_EST_BELLE_LANCOME.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Floral",
            "id": 1
          },
          {
            "title": "sweet",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Mou",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Frénétique",
            "id": 1
          },
          {
            "title": "Combinaison",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Nuit",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Interieur",
            "id": 1
          },
          {
            "title": "Intérieur nuit",
            "id": 2
          },
          {
            "title": "Intérieur nuit",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Rose vif & violine",
            "id": 1
          }
        ]
      },
      {
        "name": "Romance",
        "brand": "Ralph Lauren",
        "thumb": "assets/images/ROMANCE_RALPHLAUREN.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Floral",
            "id": 1
          },
          {
            "title": "Woody",
            "id": 3
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Mou",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Pur",
            "id": 1
          },
          {
            "title": "Calme",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Acidulé",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Rose pâle",
            "id": 1
          }
        ]
      },
      {
        "name": "Flower Bomb",
        "brand": "Viktor & Rolf",
        "thumb": "assets/images/FLOWERBOMB_V&R.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "sweet",
            "id": 1
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Mou",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Frénétique",
            "id": 1
          },
          {
            "title": "Combinaison",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Interieur",
            "id": 1
          },
          {
            "title": "Intérieur jour",
            "id": 2
          }
        ],
        "colors": [
          {
            "title": "Rose vif",
            "id": 1
          }
        ]
      },
      {
        "name": "Bonbon",
        "brand": "Viktor & Rolf",
        "gender": "Femme",
        "thumb": "assets/images/BONBON_V&R.png",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "sweet",
            "id": 1
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Mou",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Frénétique",
            "id": 1
          },
          {
            "title": "Combinaison",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Interieur",
            "id": 1
          },
          {
            "title": "Intérieur jour",
            "id": 2
          }
        ],
        "colors": [
          {
            "title": "Rose bonbon",
            "id": 1
          }
        ]
      },
      {
        "name": "Beachwalk",
        "brand": "Maison Martin Margiela",
        "thumb": "assets/images/BEACHWALK_MARTIN_MARGIELA.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Woody",
            "id": 1
          },
          {
            "title": "crushed leaves",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Souple",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Pur",
            "id": 1
          },
          {
            "title": "Calme",
            "id": 2
          }
        ],
        "sounds": [
          {
            "title": "Bruit de vagues douces",
            "id": 1
          }
        ],
        "tastes": [
          {
            "title": "amer",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          }
        ],
        "colors": [
          {
            "title": "Pastel & aquarelle",
            "id": 1
          }
        ]
      },
      {
        "name": "Untitled",
        "brand": "Maison Martin Margiela",
        "thumb": "assets/images/UNTITLED_MARTIN_MARGIELA.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Floral",
            "id": 1
          },
          {
            "title": "Marine",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Mou",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Pur",
            "id": 1
          },
          {
            "title": "Calme",
            "id": 2
          },
          {
            "title": "Frénétique",
            "id": 3
          }
        ],
        "sounds": [
          {
            "title": "Bruit de nature",
            "id": 1
          }
        ],
        "tastes": [
          {
            "title": "Salé",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Vert pale",
            "id": 1
          },
          {
            "title": "Vert pale & aquarelle",
            "id": 2
          }
        ]
      },
      {
        "name": "Funfair",
        "brand": "Maison Martin Margiela",
        "thumb": "assets/images/FUNFAIR_MARTIN_MARGIELA.png",
        "gender": "Femme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Floral",
            "id": 1
          },
          {
            "title": "Sweet",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Soft",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Dur",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Pur",
            "id": 1
          },
          {
            "title": "Frénétique",
            "id": 2
          }
        ],
        "sounds": [
          {
            "title": "Accordéon joyeux",
            "id": 1
          }
        ],
        "tastes": [
          {
            "title": "Sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Couleurs vives & brillantes",
            "id": 1
          },
          {
            "title": "Orange intense",
            "id": 2
          },
          {
            "title": "Rose vif",
            "id": 3
          },
          {
            "title": "Or & laque rouge",
            "id": 4
          },
          {
            "title": "Rose vif & violine",
            "id": 5
          },
          {
            "title": "Rose bonbon",
            "id": 6
          },
          {
            "title": "Rose intense",
            "id": 7
          }
        ]
      },
      {
        "name": "Polo",
        "brand": "Ralph Lauren",
        "thumb": "assets/images/POLO_RALPHLAUREN.png",
        "gender": "Homme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Woody",
            "id": 1
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Souple",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Frénétique",
            "id": 1
          },
          {
            "title": "Combinaison",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Amer",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Nuit",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Interieur",
            "id": 1
          },
          {
            "title": "Intérieur nuit",
            "id": 2
          },
          {
            "title": "Intérieur nuit",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Brun cognac",
            "id": 1
          }
        ]
      },
      {
        "name": "Polo Black",
        "brand": "Ralph Lauren",
        "thumb": "assets/images/POLOBLACK_RALPHLAUREN.png",
        "gender": "Homme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Woody",
            "id": 1
          },
          {
            "title": "Herbal",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Dur",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Frénétique",
            "id": 1
          },
          {
            "title": "Combinaison",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Salé",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Nuit",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur nuit",
            "id": 2
          }
        ],
        "colors": [
          {
            "title": "Vert eucalyptus",
            "id": 1
          }
        ]
      },
      {
        "name": "Polo Red",
        "brand": "Ralph Lauren",
        "thumb": "assets/images/POLORED_RALPHAUREN.png",
        "gender": "Homme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Fresh",
            "id": 1
          },
          {
            "title": "Spicy",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Dur",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Pur",
            "id": 1
          },
          {
            "title": "Calme",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Acidulé",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Rouge pur",
            "id": 1
          }
        ]
      },
      {
        "name": "Polo Blue",
        "brand": "Ralph Lauren",
        "thumb": "assets/images/POLOBLUE_RALPHLAUREN.png",
        "gender": "Homme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Fresh",
            "id": 1
          },
          {
            "title": "Aquatic",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Dur",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Pur",
            "id": 1
          },
          {
            "title": "Frénétique",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Acidulé",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Bleu ciel saturé",
            "id": 1
          }
        ]
      },
      {
        "name": "Polo Blue",
        "brand": "Ralph Lauren",
        "thumb": "assets/images/POLOBLUE_RALPHLAUREN.png",
        "gender": "Homme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Fresh",
            "id": 1
          },
          {
            "title": "Aquatic",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Dur",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Pur",
            "id": 1
          },
          {
            "title": "Frénétique",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Acidulé",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Bleu ciel saturé",
            "id": 1
          }
        ]
      },
      {
        "name": "Drakkar Noir",
        "brand": "Guy Laroche",
        "thumb": "assets/images/DRAKKAR_NOIR_GUY_LAROCHE.png",
        "gender": "Homme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Herbal",
            "id": 1
          },
          {
            "title": "Fern",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Mou",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Frénétique",
            "id": 1
          },
          {
            "title": "Combinaison",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Salé",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Nuit",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Interieur",
            "id": 1
          },
          {
            "title": "Intérieur nuit",
            "id": 2
          }
        ],
        "colors": [
          {
            "title": "Vert très foncé",
            "id": 1
          },
          {
            "title": "Noir",
            "id": 2
          }
        ]
      },
      {
        "name": "Spice Bomb",
        "brand": "Viktor & Rolf",
        "thumb": "assets/images/SPICEBOMB_V&R.png",
        "gender": "Homme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Sweet Vanilla",
            "id": 1
          },
          {
            "title": "Spicy",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Dur",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Frénétique",
            "id": 1
          },
          {
            "title": "Combinaison",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Salé",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Interieur",
            "id": 1
          },
          {
            "title": "Intérieur jour",
            "id": 2
          }
        ],
        "colors": [
          {
            "title": "Acier clair brillant",
            "id": 1
          }
        ]
      },
      {
        "name": "Fuel For Life",
        "brand": "Diesel",
        "thumb": "assets/images/FUELFORLIFE_HOMME_DIESEL.png",
        "gender": "Homme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Herbal",
            "id": 1
          },
          {
            "title": "Fern",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Souple",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Pur",
            "id": 1
          },
          {
            "title": "Calme",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Acidulé",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Bleu jean",
            "id": 1
          }
        ]
      },
      {
        "name": "Only The Brave",
        "brand": "Diesel",
        "thumb": "assets/images/ONLYTHEBRAVE_DIESEL.png",
        "gender": "Homme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Sweet Vanilla",
            "id": 1
          },
          {
            "title": "Woody",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Lisse",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Dur",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Pur",
            "id": 1
          },
          {
            "title": "Calme",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          }
        ],
        "colors": [
          {
            "title": "Chamois",
            "id": 1
          },
          {
            "title": "Beige",
            "id": 2
          }
        ]
      },
      {
        "name": "Acqua Di Gio",
        "brand": "Giorgio Armani",
        "thumb": "assets/images/AQUA_DI_GIO_ARMANI.png",
        "gender": "Homme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Fresh",
            "id": 1
          },
          {
            "title": "Aquatic",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Soft",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Dur",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Pur",
            "id": 1
          },
          {
            "title": "Calme",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Acidulé",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          }
        ],
        "colors": [
          {
            "title": "Turquoise",
            "id": 1
          },
          {
            "title": "Vert pale",
            "id": 2
          }
        ]
      },
      {
        "name": "Code Uomo",
        "brand": "Giorgio Armani",
        "thumb": "assets/images/CODE_UOMO_ARMANI.png",
        "gender": "Homme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Sweet Vanilla",
            "id": 1
          },
          {
            "title": "Spicy",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Souple",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Frénétique",
            "id": 1
          },
          {
            "title": "Combinaison",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Nuit",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Interieur",
            "id": 1
          },
          {
            "title": "Intérieur nuit",
            "id": 2
          },
          {
            "title": "Intérieur nuit",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Beige mat",
            "id": 1
          },
          {
            "title": "Beige",
            "id": 2
          }
        ]
      },
      {
        "name": "L'Homme",
        "brand": "Yves Saint Laurent",
        "thumb": "assets/images/HOMME_YSL.png",
        "gender": "Homme",
        "wakes": [
          {
            "title": "Léger",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Woody",
            "id": 1
          },
          {
            "title": "Aromatic",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Nervure",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Dur",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Pur",
            "id": 1
          },
          {
            "title": "Calme",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Amer",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Jour",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur jour",
            "id": 2
          },
          {
            "title": "Extérieur jour",
            "id": 3
          }
        ],
        "colors": [
          {
            "title": "Chanvre",
            "id": 1
          },
          {
            "title": "Beige",
            "id": 2
          },
          {
            "title": "Ficelle",
            "id": 3
          }
        ]
      },
      {
        "name": "La Nuit De L'Homme",
        "brand": "Yves Saint Laurent",
        "thumb": "assets/images/LA_NUIT_DE_HOMME_YSL.png",
        "gender": "Homme",
        "wakes": [
          {
            "title": "Affirmé",
            "id": 1
          }
        ],
        "olfactorys": [
          {
            "title": "Sweet Vanilla",
            "id": 1
          },
          {
            "title": "Woody",
            "id": 2
          }
        ],
        "densitivitys": [
          {
            "title": "Soft",
            "id": 1
          }
        ],
        "sensitivitys": [
          {
            "title": "Mou",
            "id": 1
          }
        ],
        "textures": [],
        "levels": [
          {
            "title": "Frénétique",
            "id": 1
          },
          {
            "title": "Combinaison",
            "id": 2
          }
        ],
        "sounds": [],
        "tastes": [
          {
            "title": "Sucré",
            "id": 1
          }
        ],
        "lights": [
          {
            "title": "Nuit",
            "id": 1
          }
        ],
        "places": [
          {
            "title": "Exterieur",
            "id": 1
          },
          {
            "title": "Extérieur nuit",
            "id": 2
          }
        ],
        "colors": [
          {
            "title": "Noir",
            "id": 1
          },
          {
            "title": "Anthracite",
            "id": 2
          }
        ]
      }

      , function () {
      console.log('finished populating perfume');
    }
  );
});


/*var Auragramme = require('../api/auragram/auragram.model');
Auragramme.find({}).remove(function () {
  Auragramme.create(
    {
      name: 'AAA AAA AAA',
      brand: 'Ralph Lauren',
      thumb: '',
      data: '',
      gender: 'homme',
      colors: ['bois flotté'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['dur'],
      densitivitys: ['nervuré'],
      olfactorys: [],
      wakes: []
    },
    {
      name: 'BBB BBB BBB',
      brand: 'Yves Saint Laurent',
      thumb: '',
      picture: '',
      description: '',
      price: '',
      gender: 'homme',
      colors: ['lainage mat'],
      places: [],
      lights: [],
      tastes: [],
      sounds: [],
      levels: [],
      sensitivitys: ['mou'],
      densitivitys: ['soft'],
      olfactorys: [],
      wakes: []
    },
    function () {
      console.log('finished populating auragram');
    }
  )
});*/
