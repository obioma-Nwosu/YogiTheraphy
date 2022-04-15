import GetPoses from './GetPoses';

const allPoses = GetPoses();
const yogaLevel = ['Beginner', 'Intermediate', 'Advanced'];
const body = ['Upper Body', 'Full Body'];

const setPoses = (idx) => {
  // create new array which only contains certain poses
  const items = [];
  idx.forEach(function (i) {
    items.push(allPoses[i]);
  });
  return items;
};

export default function GetVideos() {
  // return array with all Yoga Pose Objects
  return [
    {
      id: '1',
      videoId: 'W88ONI2_HZA', //last video
      isFav: false,
      name: 'Vorstellung',
      level: yogaLevel[0],
      focus: body[1],
      poses: [],
    },
    {
      id: '2',
      videoId: 'k7IelRIciV0',
      isFav: false,
      name: 'Sonnengruß Variante',
      level: yogaLevel[0],
      focus: body[1],
      poses: setPoses([8, 12, 6]),
    },
    {
      id: '3',
      videoId: 'FpsuSAZ14',
      isFav: false,
      name: 'Twist auf dem Stuhl',
      level: yogaLevel[0],
      focus: body[0],
      poses: setPoses([17]),
    },
    {
      id: '4',
      videoId: 'L1OI9XogY84', // Schulterbrücke und Twist vid 10
      isFav: false,
      name: 'Schulterbrücke und Twist',
      level: yogaLevel[0],
      focus: body[0],
      poses: setPoses([14, 16, 15]),
    },
    {
      id: '5',
      videoId: 'TWveBEsblDM',
      isFav: false,
      name: 'Flankendehnung und Kraft in den Oberschenkeln',
      level: yogaLevel[1],
      focus: body[1],
      poses: setPoses([9, 19, 8]),
    },
    {
      id: '6',
      videoId: 'DHHdgA13Xg0',
      isFav: false,
      name: 'Katze-Kuh-Flow',
      level: yogaLevel[1],
      focus: body[0],
      poses: setPoses([0, 1, 2, 3, 10, 23]),
    },
    {
      id: '7',
      videoId: '1g4so5jecUg', //im liegen vid 7
      isFav: false,
      name: 'Rückbeuge im Liegen',
      level: yogaLevel[1],
      focus: body[1],
      poses: setPoses([11, 20, 21, 22]),
    },
    {
      id: '8',
      videoId: 'cPp0oydsZHs',
      isFav: false,
      name: 'Mobilisation des Schultergürtels',
      level: yogaLevel[1],
      focus: body[1],
      poses: setPoses([9, 19, 8]),
    },
    {
      id: '9',
      videoId: 'GmrsJIGZM5A', //unchanged video 9
      isFav: false,
      name: 'Runde Wirbelsäule (Katze-Kuh)',
      level: yogaLevel[1],
      focus: body[1],
      poses: setPoses([0, 1, 10, 18]),
    },
    {
      id: '10',
      videoId: 'NN57uMblxjk',
      isFav: false,
      name: 'Krieger II Flow',
      level: yogaLevel[0],
      focus: body[1],
      poses: setPoses([7, 4, 5, 34, 12, 9, 19]),
    },
    {
      id: '11',
      videoId: 'Z9WQmVXhe-o',
      isFav: false,
      name: 'Flanken- und Nackendehnung im Sitzen',
      level: yogaLevel[0],
      focus: body[0],
      poses: setPoses([35]),
    },
    {
      id: '12',
      videoId: 'R4rw1uAZ-sU',
      isFav: false,
      name: 'Held Variation (Schulteröffnung im Stehen)',
      level: yogaLevel[1],
      focus: body[1],
      poses: setPoses([8, 6, 12, 13, 7]),
    },
    {
      id: '13',
      videoId: 'QfqpEuC_7Yg', // Abschlußentspannung vid 14
      isFav: false,
      name: 'kurze Schlussentspannung',
      level: yogaLevel[0],
      focus: body[1],
      poses: [],
    },
   
  ];
}
