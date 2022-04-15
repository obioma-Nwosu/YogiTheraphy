const yogaLevel = ['Beginner', 'Intermediate', 'Advanced'];
const asanaType = ['Seated', 'Kneeling', 'Standing', 'Floor', 'Inversions'];

export default function GetPoses() {
  return [
    {
      id: '1',
      isFav: false,
      name: 'Cow Pose',
      sanskrit: 'Bitilasana',
      level: yogaLevel[0],
      type: asanaType[1],
      imgPath: [
        require('../assets/01_cow.jpeg'),
        require('../assets/01_cow_variant1.jpg'),
      ],
      effect:
        'spinal extension \u2794 spinal extensors are engaged\n\n' +
        'relaxation of the cervical spine \u2794 elongating your neck\n\n' +
        'natural curvature of the lumbar spine\n',
      description:
        '1. Begin in a prone position on all fours with hands directly under the shoulder.\n\n' +
        '2. While the abdomen is active, pull the buttocks apart and open the pelvis.\n\n' +
        '3. Shoulders come away from the ears.\n\n' +
        '4. Optional: blanket under knees, make fists with hands or be on your forearms.\n',
      watchout:
        'activate abdominal muscles to avoid a hollow back\n\n' +
        'in case of knee pain double fold your mat or use an additional pillow or blanket to support your knee\n',
    },
    {
      id: '2',
      isFav: false,
      name: 'Cat Pose',
      sanskrit: 'Bidalasana',
      level: yogaLevel[0],
      type: asanaType[1],
      imgPath: [
        require('../assets/02_cat.jpeg'),
        require('../assets/02_cat_variation1.jpg'),
      ],
      effect:
        'spinal flexion \u2794 stretching the back muscles\n',
      description:
        '1. Press the palms of your hands below your shoulders.\n\n' +
        '2. Squeeze the shoulders, round your entire spine, chin pulls to the breastbone, shoulder to the ears.\n\n' +
        '3. Begin in a prone position on all fours with hands directly under the shoulder .\n\n' +
        '4. Optional: blanket under knees\n',
      watchout:
        'in case of knee pain double fold your mat or use an additional pillow or blanket to support your knee\n',
    },
    {
      id: '3',
      isFav: false,
      name: 'Child Pose',
      sanskrit: 'Balasana',
      level: yogaLevel[0],
      type: asanaType[1],
      imgPath: [require('../assets/03_child.jpeg')],
      effect:
        'spinal flexion \u2794 stretching the spinal extensor muscles\n\n' +
        'neck muscles are completely relaxed\n',
      description:
        '1. Open your knees and let your buttocks pull back towards your heels.\n\n' +
        '2. Arms are stretched forward or backward near your thighs.\n\n' +
        '3. Forehead parallel to the mat.\n\n' +
        '4. Optional: forehead on a book, blanket under knees.\n',
      watchout:
        'front of shoulders drop forward\n',
    },
    {
      id: '4',
      isFav: false,
      name: 'Downward Facing Dog',
      sanskrit: 'Adho Mukho Svanasana',
      level: yogaLevel[1],
      type: asanaType[4],
      imgPath: [
        require('../assets/04_dog.jpeg'),
        require('../assets/04_dog_Variation1.jpg'),
        require('../assets/04_dog_Variation2.jpg'),
        require('../assets/04_dog_variation3.jpg'),
      ],
      effect:
        'natural alignment of the spine\n\n' +
        'stretching the latissimus dorsi muscle\n\n' +
        'strengthening the shoulders\n',
      description:
        '1. Come to your hands and knees with the wrists underneath the shoulders and the knees underneath the hips.\n\n' +
        '2. Curl your toes under and push back through your hands to lift your hips and straighten your legs.\n\n' +
        '3. Let your head hang and move your shoulder blades away from your ears towards your hips.\n\n' +
        "4. Engage your quadriceps strongly to take the burden of your body's weight off your arms.\n\n" +
        '5. Rotate your thighs inward, keep your tailbone high, and sink your heels towards the floor.\n\n' +
        '6. Check that the distance between your hands and feet is correct by coming forward to a plank position.' +
        ' The distance between the hands and feet should be the same in these two poses. Do not step the feet toward the hands in down dog in order the get the heels to the floor.\n\n' +
        '7. Exhale and bend your knees to release and come back to your hands and knees.\n',
      watchout:
        'straight back, no rounded back\n\n' +
        'knees can be slightly bent to keep the back straight\n\n' +
        'cervical spine is relaxed, do not flex the neck too hard\n',
    },
    {
      id: '5',
      isFav: false,
      name: 'Extended Side Angle',
      sanskrit: 'Utthita Parsvakonasana',
      level: yogaLevel[0],
      type: asanaType[2],
      imgPath: [require('../assets/05_ExtendedSideAngle.jpg')],
      effect:
        'strengthening the spinal extensor muscles\n\n' +
        'stretching the latissimus dorsi muscle and the flank\n',
      description:
        '1. Front leg in line with heel of rear leg, front leg at 90 degree angle, rear leg parallel to the edge of the mat.\n\n' +
        '2. Pelvis deep, shoulders relaxed, right arm rests on right thigh, keep as little weight.\n\n' +
        '3. Pull left arm in line over head and chest.\n\n' +
        '4. Optional: Do not lower pelvis too deeply.\n',
      watchout:
        'bent knee should not extend forward farther than your toes to avoid additional stress on ligaments and joints\n\n' +
        'pull the bent knee outwards' +
        'hips are in line with the body axis, do not push hips backwards\n',
    },
    {
      id: '6',
      isFav: false,
      name: 'Peaceful Warrior',
      sanskrit: 'Shanti Virabhadrasana',
      level: yogaLevel[0],
      type: asanaType[2],
      imgPath: [require('../assets/06_peacefulWarrior.jpg')],
      effect:
        'slight spinal extension\n\n' +
        'strengthening the spinal extensor muscles which stabilise the spine\n\n' +
        'stretching the latissimus dorsi muscle and the flank\n',
      description:
        '1. For posture see extended side angle pose. Activity in the legs.\n\n' +
        '2. Front arm now pulls back in a line, front side stretching and tension in back leg.\n\n' +
        '3. Front leg is bent, face is pulled towards the stretched arm.\n\n' +
        '4. Optional: Front leg slightly stretched, moderate stretching in the sides.\n',
      watchout: 'knee directly over ankle\n',
    },
    {
      id: '7',
      isFav: false,
      name: 'Warrior 1',
      sanskrit: 'Virabhadrasana 1',
      level: yogaLevel[0],
      type: asanaType[2],
      imgPath: [
        require('../assets/07_warrior1.jpeg'),
        require('../assets/07_warrior1_variation1.jpg'),
        require('../assets/07_warrior1_variation2.jpg'),
      ],
      effect:
        'slight spinal extension\n\n' +
        'strengthening the spinal extensor muscles which stabilise the spine\n\n' +
        'stretching the latissimus dorsi muscle\n\n' +
        'trapezius muscle and rhomboids are engaged',
      description:
        '1. Legs hip-width apart in one line, lunge, front leg bent 90 degrees, rear leg stretched, pelvis in one line, rear heel raised.\n\n' +
        '2. Arms pull up towards the sky, either closed or open, head follows the arms, activity in the abdomen, slight bending in lower back.\n\n' +
        '3. Optional: arms open, eyes straight ahead, front leg slightly stretched.\n',
      watchout: 'knee directly over ankle\n',
    },
    {
      id: '8',
      isFav: false,
      name: 'Warrior 2',
      sanskrit: 'Virabhadrasana 2',
      level: yogaLevel[0],
      type: asanaType[2],
      imgPath: [require('../assets/08_warrior2.jpg')],
      effect:
        'strengthening the spinal extensor muscles which stabilize the spine\n',
      description:
        '1. For posture see extended side angle pose.\n\n' +
        '2. Create foundation in the legs, front leg 90 degrees, arms are stretched out in a line to the sides.\n\n' +
        '3. Face looks to the front arm, shoulders away from the ears, buttocks pull in with tailbone.\n\n' +
        '4. Optional: Do not bend the front leg too deeply. Reduce step size. Extend arms to sides.\n',
      watchout: 'knee directly over ankle\n',
    },
    {
      id: '9',
      isFav: false,
      name: 'Mountain Pose',
      sanskrit: 'Tadasana',
      level: yogaLevel[0],
      type: asanaType[2],
      imgPath: [
        require('../assets/09_Tadasana_front.jpg'),
        require('../assets/09_Tadasana_side.jpg'),
        require('../assets/09_tadasana_variation.jpeg'),
      ],
      effect:
        'spine in neutral position, spine is gently elongated to maintain a neutral curve\n\n' +
        'spinal extensors are engaged to stabilise the spine\n',
      description:
        '1. Feet are set up hip-wide.\n\n' +
        '2. Knees slightly bent, abdomen active, buttock pulled in, spine straightens up.\n\n' +
        '3. Shoulders roll backwards and down, so that the sternum straightens up. Arms rest on the sides of the body.\n\n' +
        '4. Optional: Arms can stretch upwards.\n',
      watchout: '',
    },
    {
      id: '10',
      isFav: false,
      name: 'Chair Pose',
      sanskrit: 'Utkatasana',
      level: yogaLevel[0],
      type: asanaType[2],
      imgPath: [
        require('../assets/10_Chair_side.jpeg'),
        require('../assets/10_Chair_front.jpeg'),
      ],
      effect:
        'extension of the lumbar spine\n\n' +
        'spinal extensors are engaged to stabilise the spine\n\n' +
        'stretching latissimus dorsi muscle with shoulder flexion\n\n' +
        'shoulder muscles are engaged through arm lift\n',
      description:
        '1. Knees are hips-width apart and bent.\n\n' +
        '2. The hip is back, the chest is forward, and the arms are above the head, in line with the ears.\n\n' +
 	 '3. Utkatasana Variation: Slowly transition in and out of the cat and cow posture -> Position.\n',
      watchout:
        'keep knees in one line with feet, knees should not extend forward farther than your toes\n\n' +
        'activate abdominal muscles\n\n' +
        'straight back, avoid a rounded or hollow back\n\n' +
        'raise sternum and chin slightly\n',
    },
    {
      id: '11',
      isFav: false,
      name: 'Extended Puppy Pose',
      sanskrit: 'Anahatasana',
      level: yogaLevel[1],
      type: asanaType[1],
      imgPath: [require('../assets/11_ExtendedPuppyPose.jpeg')],
      effect:
        'spinal flexion\n\n' +
        'stretching the shoulder musculature\n',
      description:
        '1. Start in the four-footed stand.\n\n' +
        '2. Move your hands forward by about one forearm length. Now pull the pelvis up and back over the knees with exhalation.\n\n' +
        '3. Lower the upper body so that the chest approaches the floor. Lay down forehead or chin.\n\n' +
        '4. The elbows do not touch the floor - keep the arms active.\n\n' +
        '5. Make sure that your buttocks remain above your knees.\n',
      watchout:
        'hips directly above knees\n\n' +
        'forehead can rest on mat\n',
    },
    {
      id: '12',
      isFav: false,
      name: 'Cobra Pose',
      sanskrit: 'Bhujangasana',
      level: yogaLevel[0],
      type: asanaType[3],
      imgPath: [
        require('../assets/12_Cobra.jpeg'),
        require('../assets/12_Cobra_Variation1.jpg'),
      ],
      effect:
        'elongation of the spine\n\n' +
        'even curve along neck and spine\n\n' +
        'strengthening spinal extensor muscles\n',
      description:
        '1. Lie prone on the floor. Stretch your legs back.\n\n' +
        '2. Put your hands on the floor under your shoulders.\n\n' +
        '3. Press the tops of the feet and thighs and the pelvis firmly into the floor.\n\n' +
        '4. On inhalation, begin to straighten the arms to lift the chest off the floor, going only to the height at which you can maintain a line connection through your pelvis to your legs.\n\n' +
        "5. Don't overwork the buttocks.\n",
      watchout:
        'activate abdominal muscles\n\n' +
        'avoid a hollow back in the lumbar area\n\n' +
        'do not overstretch cervical spine\n',
    },
    {
      id: '13',
      isFav: false,
      name: 'Standing Half Forward Bend',
      sanskrit: 'Ardha Uttanasana',
      level: yogaLevel[1],
      type: asanaType[2],
      imgPath: [
        require('../assets/13_halfForwardBend.jpeg'),
        require('../assets/13_halfForwardBend_Variation1.jpg'),
      ],
      effect: 'strengthening spinal extensor muscles\n\n',
      description:
        '1. Press both feet on the mat. Bend forward, leaving knees bent as far as possible. Make sure that your back remains straight.\n\n' +
        '2. Touch the floor with your fingertips, if you cannot; touch the lower part of the legs with your hands.\n\n' +
        '3. Pull your shoulders back towards each other on your back and let your head relax.\n',
      watchout: 'straight back, avoid a rounded back\n',
    },
    {
      id: '14',
      isFav: false,
      name: 'Standing Forward Bend',
      sanskrit: 'Uttanasana',
      level: yogaLevel[1],
      type: asanaType[2],
      imgPath: [require('../assets/14_forwardBend.jpeg')],
      effect:
        'spinal flexion \u2794 deep spinal stretch\n\n' +
        'stretching spinal extensor muscles and latissimus dorsi muscle\n',
      description:
        '1. Stretch your legs, round your back and let your hands sink to the ground.\n\n' +
        '2. The belly touches the thighs, the head is relaxed.\n',
      watchout:
        'straight back, avoid a rounded back\n\n' +
        'be careful during transition in and out of the bend, pay special attention to the lumbar region and engage your core\n\n' +
        'knees are not locked, can be slightly bent\n',
    },
    {
      id: '15',
      isFav: false,
      name: 'Bridge',
      sanskrit: 'Setu Bandha Sarvangasana',
      level: yogaLevel[1],
      type: asanaType[4],
      imgPath: [require('../assets/15_Bridge.jpeg')],
      effect: 'strengthening spinal extensor muscles\n',
      description:
        '1. Fold your hands under your buttocks.\n\n' +
        '2. Pull your shoulder blades tightly together, but leave your neck as much room as necessary.\n\n' +
        '3. Keep your legs open hip-wide and press your heels firmly into the ground.\n\n' +
        '4. No pain in the lower back. Activate your abdominals.\n',
      watchout:
        'knees directly above heels\n\n' +
	'No pain in the lower back. Activate your abdominals.\n\n' +
        'knees in neutral position, they do neither move towards the outside nor the inside\n',
    },
    {
      key: '16',
      isFav: false,
      name: 'Crocodile Pose',
      sanskrit: 'Makarasana',
      level: yogaLevel[0],
      type: asanaType[3],
      imgPath: [require('../assets/16_Crocodile.jpeg')],
      effect:
        'spinal rotation\n\n' +
        'stretching the flank\n',
      description:
        '1. Lie on your back, your arms lying flat on the floor at shoulder level, stretched out flat on the floor.\n\n' +
        '2. With one exhalation lift your stretched legs up until they are perpendicular to the floor.\n\n' +
        '3. With one exhalation, lower both legs simultaneously to the left until you can lay them on the floor.\n\n' +
        '4. The legs are held close together throughout the exercise.\n\n' +
        '5. Try to keep your back, especially your right shoulder, firmly on the floor.\n\n' +
        '6. Ideally, even the lower back should also remain on the floor and only the legs should rotate from the hip.\n\n' +
        '7. The abdominal muscles are activated and pull to the right.\n',
      watchout:
        'shoulders are kept firmly on the ground, if this is not possible, use a pillow or yoga block\n\n' +
        'look away from your knees if comfortable\n',
    },
    {
      id: '17',
      isFav: false,
      name: 'Knees-to-Chest Pose',
      sanskrit: 'Apanasana',
      level: yogaLevel[0],
      type: asanaType[3],
      imgPath: [require('../assets/17_Knees-to-Chest.jpeg')],
      effect: 'releases tension in the lumbar region\n',
      description:
        '1. Lying on the back, draw the knees gently in toward the chest.\n\n' +
        '2. Inhaling, release the knees slightly away from the chest; exhaling, hug them in.\n',
      watchout: '',
    },
    {
      id: '18',
      isFav: false,
      name: 'Seated Spinal Twist',
      sanskrit: 'Parivrtta Sukhasana',
      level: yogaLevel[0],
      type: asanaType[0],
      imgPath: [
        require('../assets/18_SeatedSpinalTwist_front.jpeg'),
        require('../assets/18_SeatedSpinalTwist_side.jpeg'),
      ],
      effect:
        'increases flexibility of the lower back\n\n' +
        'stretching the back musculature\n',
      description:
        '1. Sit upright on your mat with your legs extended in front of you and your hands resting on your thighs.\n\n' +
        '2. Bend your right knee, then cross your right leg over and place your foot next to your left thigh.\n\n' +
        '3. Bend your left knee and position your left ankle next to your right glute. Square your hips so they remain even.\n\n' +
        '4. Reach your right arm behind you and place your fingertips on the floor, gently twisting your body to the right.\n' +
        '5. Raise your left arm upward.\n',
      watchout: 'head in one line with the spine\n\n',
    },
    {
      id: '19',
      isFav: false,
      name: 'Balancing Cat Pose',
      sanskrit: 'Cakravakasana',
      level: yogaLevel[1],
      type: asanaType[1],
      imgPath: [
        require('../assets/19_BalancingCatPose_Variant1.jpeg'),
        require('../assets/19_BalancingCatPose_Variant2.jpeg'),
      ],
      effect: 'spine in neutral position\n',
      description:
        '1. Begin in a prone position on all fours with hands directly under shoulders.\n\n' +
        '2. Extend one leg behind you, lifting to hip height, keeping the buttocks level.\n\n' +
        '3. Inhale and extend the opposite arm in front of you with the palm facing inward.\n\n' +
        '4. The back should remain flat and your head should be in line with the spine.\n\n' +
        '5. Lifting extended arm to shoulder height, reach with the extended fingers, crown of the head and exhale into the stretch.\n\n' +
        '6. Lifting the extended diagonal arm.\n\n' +
        '7. Inhale and Coil arm and leg to the middle, then exhale and extend arm and leg.\n',
      watchout:
        'straight back, pay special attention to the alignment of your cervical spine\n\n' +
        'do not tilt your pelvis to one side\n',
    },
    {
      id: '20',
      isFav: false,
      name: 'Chair Pose - Variation Cat/Cow',
      sanskrit: 'Utkatasana',
      level: yogaLevel[1],
      type: asanaType[2],
      imgPath: [
        require('../assets/20_Chair_CatCowVariant1.jpeg'),
        require('../assets/20_Chair_CatCowVariant2.jpeg'),
      ],
      effect:
        'alternately spinal extension and flexion\n\n' +
        'spinal extensors are engaged to stabilise the spines\n\n' +
        'stretching the back muscles\n',
      description:
        '1. Stand in Mountain Pose. Inhale and raise your arms perpendicular to the floor.\n\n' +
        '2. Exhale and bend your knees, trying to take the thighs as nearly parallel to the floor as possible.\n\n' +
        '3. Keep the inner thighs parallel to each other.\n\n' +
        '4. Firm your shoulder blades against the back.\n\n' +
        '5. Take your tailbone down toward the floor and in toward your pubis.\n',
      watchout:
        'keep knees in one line with feet, knees should not extend forward farther than your toes\n\n' +
        'activate abdominal muscles\n\n' +
        'slowly transition in and out of the Cat and Cow posture\n',
    },
    {
      id: '21',
      isFav: false,
      name: 'Locust Pose',
      sanskrit: 'Shalabhasana',
      level: yogaLevel[1],
      type: asanaType[3],
      imgPath: [require('../assets/21_LocustPose.jpeg')],
      effect:
        'spinal extension \u2794 strengthening the spinal extensor muscles\n\n' +
        'cervical extensors are engaged to elongate the neck\n',
      description:
        '1. Lie down in the prone position.\n\n' +
        '2. Stretch out your arms together towards the lower body, in the air.\n\n' +
        '3. Pull your shoulders together on your back.\n\n' +
        '4. With inhalation, lift your legs up as far as you can.\n',
      watchout:
        'do not bend your knees\n\n' +
        'do not raise your shoulders towards your ears, pull your shoulders backwards, shoulder blades are touching\n\n' +
        'in case of neck pain: look down\n',
    },
    {
      id: '22',
      isFav: false,
      name: 'Half Locust Pose',
      sanskrit: 'Ardha Shalabhasana',
      level: yogaLevel[1],
      type: asanaType[3],
      imgPath: [
        require('../assets/22_HalfLocustPose_ExtendedExtremities.jpeg'),
      ],
      effect:
        'spinal extension \u2794 strengthening the spinal extensor muscles\n',
      description:
        '1. Lie down in the prone position.\n\n' +
        '2. Walk the arms underneath your body, so that the forearms and the hands are under the belly and thighs.\n\n' +
        '3. Inhale and lengthen the legs, reaching the toes away from your body.\n\n' +
        '4. Press the arms down into the floor and slowly lift the legs up towards the ceiling.\n',
      watchout:
        'do not bend your knees\n\n' +
        'Variant 1: diagonal, lift opposite arm and leg at the same time\n\n' +
        'Variant 2: lift your upper body additionally\n',
    },
    {
      id: '23',
      isFav: false,
      name: 'Locust Pose - Variation with extended Arms',
      sanskrit: 'Shalabhasana',
      level: yogaLevel[1],
      type: asanaType[3],
      imgPath: [require('../assets/23_LocustArmFront.jpeg')],
      effect:
        'spinal extension \u2794 strengthening the spinal extensor muscles\n',
      description:
        '1. Lie down in the prone position.\n\n' +
        '2. Stretch out your arms together in front of you in the air.\n\n' +
        '3. With inhalation, lift your legs up as far as you can.\n',
      watchout:
        'dynamic Variant: paddling movements with extended extremities\n',
    },
    {
      id: '24',
      isFav: false,
      name: 'Sphinx Pose',
      sanskrit: 'Salamba Bhujangasana',
      level: yogaLevel[0],
      type: asanaType[3],
      imgPath: [require('../assets/24_Sphinx.jpg')],
      effect:
        'elongation of the spine\n\n' +
        'even curve along neck and spine\n\n' +
        'strengthening spinal extensor muscles\n',
      description:
        '1. Starting in the prone position, place the elbows under the shoulders and the forearms are aligned forward on the floor.\n\n' +
        '2. The legs are closed and the pubic bone pushes into the floor.\n\n' +
        '3. Now straighten up the upper body with the inhalation and stay in this position for a few breaths.\n\n' +
        '4. Then slowly put your upper body down again with the exhalation and relax in the prone position.\n',
      watchout:
        'straight back, avoid a hollow back\n\n' +
        'long neck\n\n' +
        'lift your chin\n',
    },
    {
      id: '25',
      isFav: false,
      name: 'Gate Pose',
      sanskrit: 'Parighasana',
      level: yogaLevel[0],
      type: asanaType[1],
      imgPath: [require('../assets/25_GatePose.jpeg')],
      effect:
        'lateral flexion of the spine\n\n' +
        'rotation of the cervical spine\n',
      description:
        '1. Kneel on the mat and stretch the right leg out to the side.\n\n' +
        '2. The right arm rests on the right leg or ankle, raise the left arm upward.\n',
      watchout:
        'avoid resting your hand directly on the knee to avoid additional pressure on the joint\n\n' +
        'do not put a lot of weight in the hand that is resting on your leg, core is engaged\n\n' +
        'instead of placing your hand on your leg you can use a yoga block\n\n' +
        'torso in one line with thighs, do not let your chest or shoulders drop forward\n\n' +
        'in case of neck pain: do not turn your head to look up, look straight forward\n',
    },
    {
      id: '26',
      isFav: false,
      name: 'Pyramid Pose',
      sanskrit: 'Parsvottanasana',
      level: yogaLevel[0],
      type: asanaType[2],
      imgPath: [
        require('../assets/26_Pyramid.jpeg'),
        require('../assets/26_Pyramid_Variation.jpg'),
      ],
      effect: 
  	'stretching the backs of the legs \n\n' +
	'lateral stretching\n\n',
      description:
        '1. Stand with your feet about one meter apart and place your hands on your hips.\n\n' +
        '2. Lean your upper body forward over your right leg until it is parallel to the floor.\n\n' +
        '3. Touch the floor with your fingertips.\n\n' +
        '4. The tension in your thigh remains, your chest points forward. Your heels remain firmly on the floor.\n',
      watchout:
        'long and straight spine, avoid a rounded back\n\n' +
        'keep your hips squared, correct your stance width if needed\n',
    },
    {
      id: '27',
      isFav: false,
      name: 'Extended Triangle Pose',
      sanskrit: 'Utthita Trikonasana',
      level: yogaLevel[1],
      type: asanaType[2],
      imgPath: [require('../assets/27_ExtendedTrianglePose.jpeg')],
      effect: 'strengthening the spinal extensor muscles\n\n',
      description:
        '1. Begin standing with the feet one leg-length apart, knees unbent.\n\n' +
        '2. Turn the right foot completely to the outside and the left foot a bit inside, keeping the heels in line with the hips.\n\n' +
        '3. The arms are spread out to the sides, parallel to the ground, palms facing down.\n\n' +
        '4. The trunk is extended as far as is comfortable to the right.\n\n' +
        '5. The left arm is extended vertically, and the spine and trunk are gently twisted upwards to the left.\n\n' +
        '6. The arms are stretched away from one another, and the head is often turned to gaze at the left thumb, slightly intensifying the spinal twist.\n',
      watchout:
        'activate abdominal muscles\n\n' +
        'shoulders are in one plane, avoid pushing your upper shoulder forward\n\n' +
        'keep your legs straight, do not bend your knees to reach the ground, use yoga blocks as an aid\n\n' +
        'in case of neck pain: do not turn your head to look up, look straight forward\n',
    },
    {
      id: '28',
      isFav: false,
      name: 'Head-to-Knee Pose',
      sanskrit: 'Janu Shirshasana',
      level: yogaLevel[0],
      type: asanaType[0],
      imgPath: [require('../assets/28_SeatedForwardBend.jpeg')],
      effect: 'stretching the spinal extensor muscles\n\n',
      description:
        '1. Upright sitting position.\n\n' +
        '2. Place legs in front of you. One leg is bent.\n\n' +
        '3. With inhalation, raise your arms up.\n\n' +
        '4. With exhalation, bend your upper body forward, over the stretched legs.\n\n' +
        '5. Put your hands where they arrive. Reach for the feet.\n',
      watchout:
        'prioritise maintaining a long and straight spine rather than folding forward\n\n' +
        'optional: sit on a folded blanket or pillow\n',
    },
    {
      id: '29',
      isFav: false,
      name: 'Half Spinal Twist',
      sanskrit: 'Ardha Matsyendrasana',
      level: yogaLevel[1],
      type: asanaType[0],
      imgPath: [
        require('../assets/29_HalfSpinalTwist_front.jpeg'),
        require('../assets/29_HalfSpinalTwist_side.jpeg'),
      ],
      effect:
        'rotation of the spine to the upright leg \u2794 compression if the intervertebral discs\n\n' +
        'strengthening the spinal extensor muscles\n\n' +
        'stretchting the latissimus dorsi muscle\n',
      description:
        '1. Sit up on your heels. Drop your buttocks to the floor, to the left of your legs.\n\n' +
        '2. Bend your right leg. Cross your right foot over your left leg, and place it on the floor by the outside of your left knee.\n\n' +
        '3. Keeping your arm straight, put your right hand flat on the floor behind your back.\n\n' +
        '4. Lay your right hand on the floor. Bring your left arm outside your bent knee, then grasp your right ankle.\n\n' +
        '5. Hold and repeat, twisting the other way.\n',
      watchout:
        'straight back, prioritise elongating your spine over rotating it\n\n' +
        'pull your shoulders backwards\n\n' +
        'look over your shoulder\n',
    },
    {
      id: '30',
      isFav: false,
      name: 'Camel Pose',
      sanskrit: 'Ustrasana',
      level: yogaLevel[1],
      type: asanaType[1],
      imgPath: [
        require('../assets/30_Camel.jpeg'),
        require('../assets/30_Camel_Variant.jpeg'),
      ],
      effect:
        'spinal extension, neck elongation\n\n' +
        'strengthening the spinal extensor muscles\n\n',
      description:
        '1. From the kneeling position, place your hands in the lower back to approach the back bend.\n\n' +
        '2. The thighs remain angled to the lower legs if possible.\n\n' +
        '3. Extend your arms far up and place one arm after the other back towards your heels.\n\n' +
        '4. To maintain stability, tense your thighs and buttocks firmly.\n\n' +
        '5. Buttocks slightly tense.\n',
      watchout:
        'push abdomen forward\n\n' +
        'do not overstretch cervical spine\n',
    },
    {
      id: '31',
      isFav: false,
      name: 'Low Plank',
      sanskrit: 'Chaturanga Dandasana',
      level: yogaLevel[1],
      type: asanaType[3],
      imgPath: [
        require('../assets/31_LowPlank.jpg'),
        require('../assets/31_LowPlank_Variation1.jpg'),
      ],
      effect:
        'spine in neutral position\n\n' +
        'strengthening the spinal extensor muscles and shoulders\n',
      description:
        '1. The four-legged stand is a good starting position. The hands are under the shoulders and the knees under the hips.\n\n' +
        '2. Now slowly release the knees from the floor and build up more and more body tension until the knees are fully extended. Abdominal muscles, buttocks and thighs are tense.\n\n' +
        '3. The vertex of the knees will move forward and the heels will move backwards.Elbows are bent slowly, keeping the spine in line and the abdomen active. \n',
      watchout: 'complete core is engaged\n\n' +
 	              'Variant: Knees on the mat, elbows are bent, upper body in one line.\n',

    },
    {
      id: '32',
      isFav: false,
      name: 'Elbow Plank',
      sanskrit: 'Makara Adho Mukha Svanasana',
      level: yogaLevel[1],
      type: asanaType[3],
      imgPath: [require('../assets/32_ElbowPlank.jpg')],
      effect:
        'spine in neutral position\n\n' +
        'strengthening the spinal extensor muscles and shoulders\n',
      description:
        '1. The body balances on the forearms rather than the hands.\n\n' +
        '2. The body remains straight and aligned from the top of the spine through the heels.\n\n',
      watchout: 'complete core is engaged\n',
    },
    {
      id: '33',
      isFav: false,
      name: 'Seated Forward Bend',
      sanskrit: 'Paschimottanasana',
      level: yogaLevel[0],
      type: asanaType[0],
      imgPath: [require('../assets/33_SeatedForwardBend.jpeg')],
      effect:
        'distribution of the flexion over the whole length of the spine\n\n' +
        'stretching the spinal extensor muscles\n',
      description:
        '1. Sit on the floor with legs stretched out, feet together, hands on knees.\n\n' +
        '2. With the inhalation you lift your arms up or simply stretch your spine.\n\n' +
        '3. With the exhalation you lower your upper body towards the feet.\n',
      watchout:
        'keep legs in neutral position, legs and feet are neither turned inside nor outside\n',
    },
    {
      id: '34',
      isFav: false,
      name: 'Wheel Pose',
      sanskrit: 'Chakrasana',
      level: yogaLevel[1],
      type: asanaType[4],
      imgPath: [require('../assets/34_Wheel.jpeg')],
      effect:
        'spinal extension \u2794 strengthening the spinal extensor muscles\n\n' +
        'elongation of the lumbar spine\n\n' +
        'strengthening the shoulders\n',
      description:
        '1. Position your hands, with your fingertips pointing to your shoulders, close to your ears, keeping your arms parallel.\n\n' +
        '2. Make sure that the palms of your hands are in good contact with the floor and as close as possible to the shoulders.\n\n' +
        '3. Angle your legs and place your feet parallel to each other, hip-wide, in front of your buttocks.\n\n' +
        '4. Raise your hips and upper body off the floor, placing your weight on your hands.\n\n' +
        '5. Bring your hips up until you can rest your crown of the skull on the floor.\n',
      watchout:
        'knees directly above heels\n\n' +
        'keep knees and thighs parallel, do not splay knees to the side, use a yoga block between the legs to prevent this from happening\n\n' +
        'glutes relaxed\n',
    },
    {
      id: '35',
      isFav: false,
      name: 'Wide-Legged Forward Bend',
      sanskrit: 'Prasarita Padottanasana',
      level: yogaLevel[1],
      type: asanaType[2],
      imgPath: [
        require('../assets/35_WideLeggedForwardBend.jpeg'),
        require('../assets/35_WideLeggedForwardBend_Variation1.jpg'),
        require('../assets/35_WideLeggedForwardBend_Variation2.jpg'),
        require('../assets/35_WideLeggedForwardBend_Variation3.jpeg'),
        require('../assets/35_WideLeggedForwardBend_Variation4.jpeg'),
      ],
      effect:
        'spinal flexion \u2794 deep spinal stretch\n\n' +
        'stretching the spinal extensor muscles and the latissimus dorsi muscle\n',
      description:
        '1. Start in the mountain position. Now make a lunge and then turn all the way to the side.\n\n' +
        '2. Extend your arms to the sides.\n\n' +
        '3. The outer edges of the feet are parallel to each other and to the short edge of the mat. The toes point forward.\n\n' +
        '4. Activate your thigh muscles and distribute the weight evenly over the entire feet.\n\n' +
        '5. With the next inhalation raise your arms to shoulder level and let your upper body slide forward with the exhalation.\n\n' +
        '6. Keep your spine long. Now bend your upper body down towards the ground, the chest strives forward.\n\n' +
        '7. Lay hands on the floor at shoulder width, with the crown of the head between them. Your tailbone strives upwards. \n',
      watchout:
        'knees can be slightly bent\n\n' +
        'hips in one plane as ankles\n\n' +
        'increase your stance width to reach the ground\n\n' +
        'use yoga blocks as an aid\n\n' +
        'straight back\n\n' +
        'Variant 1: fold hands behind your back, extend your knuckles overhead during the bend to stretch your shoulders\n\n' +
        'Variant 2: bring both arms to one ankle during the bend\n',
    },
    {
      id: '36',
      isFav: false,
      name: 'Perfect Pose',
      sanskrit: 'Siddhasana',
      level: yogaLevel[0],
      type: asanaType[0],
      imgPath: [require('../assets/36_Siddhasana_Variation1.jpg')],
      effect:
        'spine in neutral position\n\n' +
        'elongation of the spine\n\n' +
        'strengthening the spinal extensors\n',
      description:
        '1. Sit on the floor with your legs extended.\n\n' +
        '2. Keep your spine straight with your arms resting at your sides.\n\n' +
        '3. Bend your left knee and bring your left heel close to your body by your groin area.\n\n' +
        '4. Bend your right knee and move it towards the front of the left ankle. If possible place your right ankle over the inner ankle of your left foot.\n\n' +
        '5. Choose a comfortable hand position. Rest your hands either on your thighs or knees.\n',
      watchout:
        'imagine your head floating up\n\n' +
        'shoulders roll back, slightly pulling your shoulder blades together\n\n' +
        'Variant: cross your legs at the shins\n',
    },
    {
      id: '37',
      isFav: false,
      name: 'High Plank',
      sanskrit: 'Phalakasana',
      level: yogaLevel[1],
      type: asanaType[3],
      imgPath: [
        require('../assets/37_HighPlank.jpg'),
        require('../assets/37_HighPlank_Variation.jpg'),
      ],
      effect:
        'spine in neutral position\n\n' +
        'strengthening the spinal extensor muscles and shoulders\n',
      description:
        '1. The four-legged stand is a good starting position. The hands are under the shoulders and the knees under the hips.\n\n' +
        '2. Now slowly release the knees from the floor and build up more and more body tension until the knees are fully extended. Abdominal muscles, buttocks and thighs are tense.\n\n' +
        '3. The vertex of the knees will move forward and the heels will move backwards.\n',
      watchout: 'complete core is engaged\n\n'+
                'Variant: Knees on the mat. Upper body in one line. \n',
    },
  ];
}