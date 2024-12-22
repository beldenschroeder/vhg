import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import { MongoClient, Db, ObjectId } from 'mongodb';

const envConfig = dotenv.config();
dotenvExpand.expand(envConfig);

const uri = process.env.DB_CONN_STRING as string;
const dbName = process.env.DB_NAME as string;

interface PaintingFileName {
  original: string;
  thumbnail: string;
}

interface Painting {
  _id: number;
  title: string;
  medium: string;
  category: string;
  widthInch: number;
  heightInch: number;
  description: string;
  fileName: PaintingFileName;
}

// TODO: Add gallery data later.
interface Gallery {
  id: number;
  name: string;
  city: string;
  country: string;
  state?: string;
}

// Define painting data.

const paintingData = [
  {
    '_id': 1,
    'title': 'In Between',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 60,
    'heightInch': 36,
    'description': 'Paula: I envisioned hidden lakes between mountains.',
    'fileName': {
      'original': 'painting001.png',
      'thumbnail': 'painting-thumbnail001.png'
    }
  },
  {
    '_id': 2,
    'title': 'Old Guards',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'description': 'Paula: "Two old trees stand in the North. They are guarding the stream and the valley from harsh weather."',
    'widthInch': 36,
    'heightInch': 60,
    'fileName': {
      'original': 'painting002.png',
      'thumbnail': 'painting-thumbnail002.png'
    }
  },
  {
    '_id': 3,
    'title': 'Trees in Spring',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 40,
    'heightInch': 40,
    'description': 'Paula: "To me one of the most beautiful things is the light green leaves on trees in spring time."',
    'fileName': {
      'original': 'painting003.png',
      'thumbnail': 'painting-thumbnail003.png'
    }
  },
  {
    '_id': 4,
    'title': 'South Sea',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 40,
    'heightInch': 40,
    'description': 'Paula: "I saw the golden sunshine on the mountains and sea while sailing."',
    'fileName': {
      'original': 'painting004.png',
      'thumbnail': 'painting-thumbnail004.png'
    }
  },
  {
    '_id': 5,
    'title': 'Lake and Mountain Blues',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 40,
    'heightInch': 40,
    'description': 'Paula: "I like to paint views that are so far at a distance--with a lot of air between--that it puts everything into a blue hue. I always loved  Monet who painted those hazed blues."',
    'fileName': {
      'original': 'painting005.png',
      'thumbnail': 'painting-thumbnail005.png'
    }
  },
  {
    '_id': 6,
    'title': 'Whirl',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 36,
    'heightInch': 48,
    'description': 'Paula: "As a kid I saw a summer wind twirl up sand behind poplar trees."',
    'fileName': {
      'original': 'painting006.png',
      'thumbnail': 'painting-thumbnail006.png'
    }
  },
  {
    '_id': 7,
    'title': 'The Cut',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 30,
    'heightInch': 36,
    'description': 'Paula: "I always loved the idea of a tiny source hidden hight  up in the mountains creating a stream cutting through rocks."',
    'fileName': {
      'original': 'painting007.png',
      'thumbnail': 'painting-thumbnail007.png'
    }
  },
  {
    '_id': 8,
    'title': 'Turquoise Lake',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 30,
    'heightInch': 40,
    'description': 'Paula: "As a teenager I took bike rides with girl friends to a lake created by a volcano in the Siebengebirge Germany."',
    'fileName': {
      'original': 'painting008.png',
      'thumbnail': 'painting-thumbnail008.png'
    }
  },
  {
    '_id': 9,
    'title': 'Sun and Wind',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 38,
    'heightInch': 38,
    'description': 'Paula: "Movement of the currents high up in the air give me the feeling of lightness."',
    'fileName': {
      'original': 'painting009.png',
      'thumbnail': 'painting-thumbnail009.png'
    }
  },
  {
    '_id': 10,
    'title': 'Blue Lake, Orange Sky',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 36,
    'heightInch': 36,
    'description': 'Paula: "Green, orange and blue - I find this a vibrant color combination."',
    'fileName': {
      'original': 'painting010.png',
      'thumbnail': 'painting-thumbnail010.png'
    }
  },
  {
    '_id': 11,
    'title': 'Exotic',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 36,
    'heightInch': 36,
    'description': 'Paula: "The unique shapes that appeared on the canvas turned out to look like tropical plants to me."',
    'fileName': {
      'original': 'painting011.png',
      'thumbnail': 'painting-thumbnail011.png'
    }
  },
  {
    '_id': 12,
    'title': 'Shadows',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 40,
    'heightInch': 40,
    'description': 'Paula: "Shadows play tricks at the pond behind our house in Germany."',
    'fileName': {
      'original': 'painting012.png',
      'thumbnail': 'painting-thumbnail012.png'
    }
  },
  {
    '_id': 13,
    'title': 'Willows',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 40,
    'heightInch': 30,
    'description': 'Paula: "This painting was inspired by Vincent van Gogh."',
    'fileName': {
      'original': 'painting013.png',
      'thumbnail': 'painting-thumbnail013.png'
    }
  },
  {
    '_id': 14,
    'title': 'Blue Sun',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 38,
    'heightInch': 36,
    'description': 'Paula: "I love to paint unrealistic, strong colors. I still see harmony in this painting even with a blue sun."',
    'fileName': {
      'original': 'painting014.png',
      'thumbnail': 'painting-thumbnail014.png'
    }
  },
  {
    '_id': 15,
    'title': 'Vision',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 72,
    'heightInch': 48,
    'description': 'This painting is a triptych. Paula: "I have seen many crows in the state of Washington and always love watching them."',
    'fileName': {
      'original': 'painting015.png',
      'thumbnail': 'painting-thumbnail015.png'
    }
  },
  {
    '_id': 16,
    'title': 'Big Falls',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 36,
    'heightInch': 48,
    'description': 'Paula: "I love seeing a big mass of water fall. It makes me realize the power of nature."',
    'fileName': {
      'original': 'painting016.png',
      'thumbnail': 'painting-thumbnail016.png'
    }
  },
  {
    '_id': 17,
    'title': 'The Gorge',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 36,
    'heightInch': 48,
    'description': 'Paula: "I had a vision of a gorge after I saw a photo of a Chinese landscape with mountains and water."',
    'fileName': {
      'original': 'painting017.png',
      'thumbnail': 'painting-thumbnail017.png'
    }
  },
  {
    '_id': 18,
    'title': 'Mystery Passage',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 40,
    'heightInch': 40,
    'description': 'Paula: "There is perfect stillness. I envision paddling a canoe into this mysterious passage."',
    'fileName': {
      'original': 'painting018.png',
      'thumbnail': 'painting-thumbnail018.png'
    }
  },
  {
    '_id': 19,
    'title': 'Small Waterfall',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 36,
    'heightInch': 48,
    'description': 'Paula: "I like the idea of a tree standing strong against water washing around it."',
    'fileName': {
      'original': 'painting019.png',
      'thumbnail': 'painting-thumbnail019.png'
    }
  },
  {
    '_id': 20,
    'title': 'Poplar Trees',
    'medium': 'Oil on Canvas',
    'category': 'Abstract',
    'widthInch': 36,
    'heightInch': 48,
    'description': 'Paula: "Old poplar trees stood high behind the house of my childhood."',
    'fileName': {
      'original': 'painting020.png',
      'thumbnail': 'painting-thumbnail020.png'
    }
  }
  // {
  //   '_id': 21,
  //   'title': 'Aspen Tree New Mexico',
  //   'medium': 'Oil on Canvas',
  //   'category': 'Abstract',
  //   'widthInch': 36,
  //   'heightInch': 56,
  //   'description': 'Paula: "I love hiking in the mountains near Santa Fe in the fall and seeing the colors of the trees."',
  //   'fileName': {
  //     'original': 'painting021.png',
  //     'thumbnail': 'painting-thumbnail021.png'
  //   }
  // },
  // {
  //   '_id': 22,
  //   'title': 'Tropical Beauty',
  //   'medium': 'Oil on Canvas',
  //   'category': 'Abstract',
  //   'widthInch': 36,
  //   'heightInch': 48,
  //   'description': 'Paula: "I saw these big green leaves in India."',
  //   'fileName': {
  //     'original': 'painting022.png',
  //     'thumbnail': 'painting-thumbnail022.png'
  //   }
  // },
  // {
  //   '_id': 23,
  //   'title': 'Water around Rock',
  //   'medium': 'Oil on Canvas',
  //   'category': 'Abstract',
  //   'widthInch': 36,
  //   'heightInch': 48,
  //   'description': 'Paula: "It is a beautiful sight and sound to see and hear ocean waves break on rocks."',
  //   'fileName': {
  //     'original': 'painting023.png',
  //     'thumbnail': 'painting-thumbnail023.png'
  //   }
  // },
  // {
  //   '_id': 24,
  //   'title': 'Birds over Water',
  //   'medium': 'Oil on Canvas',
  //   'category': 'Abstract',
  //   'widthInch': 40,
  //   'heightInch': 40,
  //   'description': 'Paula: "I love how powerful this painting turned out."',
  //   'fileName': {
  //     'original': 'painting024.png',
  //     'thumbnail': 'painting-thumbnail024.png'
  //   }
  // },
  // {
  //   '_id': 25,
  //   'title': 'Creek in the Park',
  //   'medium': 'Oil on Canvas',
  //   'category': 'Abstract',
  //   'widthInch': 36,
  //   'heightInch': 48,
  //   'description': 'Paula: "I grew up with a creek behind our house."',
  //   'fileName': {
  //     'original': 'painting025.png',
  //     'thumbnail': 'painting-thumbnail025.png'
  //   }
  // },
  // {
  //   '_id': 26,
  //   'title': 'Path into the Hazy Distance',
  //   'medium': 'Oil on Canvas',
  //   'category': 'Abstract',
  //   'widthInch': 30,
  //   'heightInch': 30,
  //   'description': 'Paula: "This painting has something soft and dreamy to me."',
  //   'fileName': {
  //     'original': 'painting026.png',
  //     'thumbnail': 'painting-thumbnail026.png'
  //   }
  // },
  // {
  //   '_id': 27,
  //   'title': 'Sun behind Trees',
  //   'medium': 'Oil on Canvas',
  //   'category': 'Abstract',
  //   'widthInch': 30,
  //   'heightInch': 36,
  //   'description': 'Paula: "Sun and trees, I love to paint them."',
  //   'fileName': {
  //     'original': 'painting027.png',
  //     'thumbnail': 'painting-thumbnail027.png'
  //   }
  // },
  // {
  //   '_id': 28,
  //   'title': 'Trees in the Fall',
  //   'medium': 'Oil on Canvas',
  //   'category': 'Abstract',
  //   'widthInch': 40,
  //   'heightInch': 24,
  //   'description': 'Paula: "I always love to paint the color of fall."',
  //   'fileName': {
  //     'original': 'painting028.png',
  //     'thumbnail': 'painting-thumbnail028.png'
  //   }
  // },
  // {
  //   '_id': 29,
  //   'title': 'Twilight',
  //   'medium': 'Oil on Canvas',
  //   'category': 'Abstract',
  //   'widthInch': 48,
  //   'heightInch': 36,
  //   'description': 'Paula: "I get lost looking at this dreamy landscape."',
  //   'fileName': {
  //     'original': 'painting029.png',
  //     'thumbnail': 'painting-thumbnail029.png'
  //   }
  // }
];

const connectToDatabase = async (uri: string) => {
  const client:MongoClient = await MongoClient.connect(uri);

  const db = client.db(dbName); // Access the database.

  return { client, db };
}

const dropDatabase = async (client: MongoClient, dbName: string): Promise<void> => {
  const db = client.db(dbName);

  await db.dropDatabase();
}

interface InsertDataParams {
  db: Db;
  collectionName: string;
  data: Array<Painting>;
}

const insertData = async ({ db, collectionName, data }: InsertDataParams): Promise<void> => {
  const collection = db.collection<Painting>(collectionName);

  await collection.insertMany(data); // Insert data into collection.
}

const rebuildDatabase = async () => {
  try {
    const { client, db } = await connectToDatabase(uri);

    // Drop existing database, if it exists.
    await dropDatabase(client, dbName); 

    // Insert new data into paintings collection
    await insertData({ db, collectionName: 'paintings', data: paintingData });

    await client.close();
  } catch (error) {
      console.error(error);
  }
}

rebuildDatabase();