const yogaLevel = ['Anfänger', 'Mittelstufe', 'Fortgeschritten'];
const asanaType = ['Sitzend', 'Knieend', 'Stehend', 'Auf dem Boden', 'Twist']

export default function GetPosesGerman() {
  return [
    {
      id: '1',
      isFav: false,
      name: 'Kuh-Stellung',
      sanskrit: 'Bitilasana',
      level: yogaLevel[0],
      type: asanaType[1],
      imgPath: [
        require('../assets/01_cow.jpeg'),
        require('../assets/01_cow_variant1.jpg'),
      ],
      effect:
        'Wirbelsäulenstreckung \u2794 Aktivierung der Streckmuskeln der Wirbelsäule \n\n' +
        'Entspannung der Halswirbelsäule \u2794 Verlängerung des Nackens\n\n' +
        'natürliche Kurve der Lendenwirbelsäule\n',
      description:
        '1. Drück die Handflächen auf Höhe deiner Schultern in die Matte, sodass die Handflächen komplett geerdet sind.\n\n' +
        '2. Während die Bauchmuskeln aktiv sind, ziehe die Gesäßmuskulatur auseinander und lass das Becken sinken.\n\n' +
        '3. Ziehe dabei die Schultern weg von den Ohren.\n\n' +
        '4. Optional: eine Decke unter die Knie, mache deine Hände zu Fäusten oder komme auf die Unterarme.\n',
      watchout:
        'Aktiviere die Bauchmuskulatur, um nicht ins Hohlkreuz zu fallen! \n\n' +
        'Bei Knieschmerzen falte deine Matte oder benutze ein zusätzliches Kissen oder Decke, die du unter deine Kniee legen kannst. \n',
    },
    {
      id: '2',
      isFav: false,
      name: 'Katzen-Stellung',
      sanskrit: 'Bidalasana',
      level: yogaLevel[0],
      type: asanaType[1],
      imgPath: [
        require('../assets/02_cat.jpeg'),
        require('../assets/02_cat_variation1.jpg'),
      ],
      effect:
        'Wirbelsäulenbeugung \u2794 Dehnung der Rückenmuskulatur\n\n' +
        'Rundung der Wirbelsäule soweit es geht\n',
      description:
        '1. Drücke die Handflächen auf Höhe deiner Schulter in die Matte.\n\n' +
        '2. Ziehe die Schulterblätter auseinander, runde die komplette Wirbelsäule, Kinn kommt zum Brustbein, Schultern ziehen zu den Ohren.\n\n' +
        '3. Optional: Decke unter die Knie\n',
      watchout:
        'Schulterblätter ziehen auseinander.\n\n' +
        'Bei Knieschmerzen falte deine Matte oder benutze ein zusätzliches Kissen oder Decke, die du unter deine Kniee legen kannst.\n',
    },
    {
      id: '3',
      isFav: false,
      name: 'Kindesstellung',
      sanskrit: 'Balasana',
      level: yogaLevel[0],
      type: asanaType[1],
      imgPath: [require('../assets/03_child.jpeg')],
      effect:
        'Wirbelsäulenbeugung \u2794 Dehnung der Wirbelsäulenstrecker\n\n' +
        'Komplette Entspannung der Nackenmuskulatur\n',
      description:
        '1. Öffne deine Kniee mattenbreit und lasse dein Gesäß zu den Fersen sinken.\n\n' +
        '2. Arme sind nach vorne gestreckt oder auf den Oberschenkeln abgelegt.\n\n' +
        '3. Die Stirn ist auf der Matte abgelegt.\n\n' +
        '4. Optional: Stirn auf einem Block abgelegt, Decke unter den Knien.\n',
      watchout:
        'Die Schultern fallen nach vorne.\n\n' +
        'Optional können die Kniee auch zusammen statt mattenbreit geöffnet sein.\n',
    },
    {
      id: '4',
      isFav: false,
      name: 'Herabschauender Hund',
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
        'Natürliche Dehnung der Wirbelsäule\n\n' +
        'Dehnung vom Muskel latissimus dorsi\n\n' +
        'Dehnung der Schultern\n',
      description:
        '1. Komme in einen 4-Füßler-Stand; dabei sind die Handflächen unterhalb der Schultern und die Knie auf Höhe des Beckens in die Matte gedrückt.\n\n' +
        '2. Presse die Zehen in die Matte und drücke dich mit den Händen von der Matte ab. Gesäß zeigt zum Himmel und die Beine sind gestreckt.\n\n' +
        '3. Lass deinen Kopf locker hängen und ziehe deine Schulterblätter von den Ohren weg Richtung Hüfte.\n\n' +
        "4. Aktiviere deine Oberschenkelmuskulatur und verteile so das Gewicht von den Händen auf die Beine.\n\n" +
        '5. Rotiere die Oberschenkelmuskulatur nach innen, strecke das Gesäß Richtung Himmel und lasse die Fersen zur Matte sinken.\n\n' +
        '6. Kontrolliere den Abstand zwischen Händen und Füßen. Du solltest vom herabschauenden Hund direkt in die Brettposition kommen. ' +
        ' Der Abstand sollte in den zwei Positionen gleich bleiben. Um in die Brettposition zu kommen, sollten die Hände nicht versetzt werden.\n\n' +
        '7. Atme aus, beuge die Knie und komme in den 4-Füßler-Stand, um die Position aufzulösen.\n',
      watchout:
        'Gerader Rücken, kein runder Rücken\n\n' +
        'Die Kniee können leicht gebeugt sein, damit die Fersen die Matte berühren.\n\n' +
        'Die Halswirbelsäule ist entspannt, beuge den Nacken nicht zu stark.\n',
    },
    {
      id: '5',
      isFav: false,
      name: 'Seitliche Winkelstellung',
      sanskrit: 'Utthita Parsvakonasana',
      level: yogaLevel[0],
      type: asanaType[2],
      imgPath: [require('../assets/05_ExtendedSideAngle.jpg')],
      effect:
        'Dehnung der Wirbelsäulenstrecker\n\n' +
        'Dehnung des Muskels Latissimus dorsi und der Flanken\n',
      description:
        '1. Vorderes Bein ist in einer Linie mit der Ferse vom hinteren Bein. Das vordere Bein ist 90° gebeugt. Das hintere Bein ist parallel zum hinteren Mattenrand.\n\n' +
        '2. Lass das Becken tief sinken, Schultern sind entspannt, rechter Arm ist auf dem rechten Oberschenkel abgelegt ohne zu viel Gewicht auf das Bein zu stützen.\n\n' +
        '3. Strecke den linken Arm in einer Linie über den Kopf.\n\n' +
        '4. Optional: Lass das Becken nicht zu tief sinken.\n',
      watchout:
        'Das gebeugte Knie sollte nicht über die Zehen zeigen, um  keinen zusätzlichen Stress auf Gelenk und Bänder auszulösen.\n\n' +
        'Versuche das gebeugte Knie nach außen zu drücken.' +
        'Die Hüften sind in einer Linie mit der Körperachse, vermeide es, mit dem Becken nach hinten auszuweichen.\n',
    },
    {
      id: '6',
      isFav: false,
      name: 'Friedlicher Krieger',
      sanskrit: 'Shanti Virabhadrasana',
      level: yogaLevel[0],
      type: asanaType[2],
      imgPath: [require('../assets/06_peacefulWarrior.jpg')],
      effect:
        'Leichte Wirbelsäulenstreckung\n\n' +
        'Stärkung der Wirbelsäulenstrecker\n\n' +
        'Dehnung des Muskels Latissimus dorsi und der Flanken\n',
      description:
        '1. Komme in die Ausgangsposition der seitlichen Winkelstellung und bringe Aktivität in die Beine.\n\n' +
        '2. Der vordere Arm zieht in einer Linie nach hinten über den Kopf, dabei wird die Vorderseite gedehnt und das hintere Bein gestärkt.\n\n' +
        '3. Vorderes Bein ist gebeugt, das Gesicht schaut Richtung gestreckten oberen Arm.\n\n' +
        '4. Optional: Vorderes Bein ist nur leicht gebeugt, leichte Dehnung in den Flanken.\n',
      watchout: 'Kniee sollten direkt über den Sprunggelenken sein.\n',
    },
    {
      id: '7',
      isFav: false,
      name: 'Krieger 1',
      sanskrit: 'Virabhadrasana 1',
      level: yogaLevel[0],
      type: asanaType[2],
      imgPath: [
        require('../assets/07_warrior1.jpeg'),
        require('../assets/07_warrior1_variation1.jpg'),
        require('../assets/07_warrior1_variation2.jpg'),
      ],
      effect:
        'Leichte Wirbelsäulenstreckung\n\n' +
        'Stärkung der Wirbelsäulenstrecker\n\n' +
        'Dehnung des Muskels Latissimus dorsi\n\n' +
        'Der Trapezius Muskel und die Rhomboiden sind aktiv.',
      description:
        '1. Die Beine sind hüftbreit in einer Linie im Ausfallschritt aufgestellt; vorderes Bein ist dabei 90° gebeugt. Das hintere Bein ist 60° nach außen rotiert und gestreckt, dabei erdet die Ferse. Das Becken ist in einer Linie.\n\n' +
        '2. Die Arme sind nach oben Richtung Himmel gestreckt, je nach Schultermobilität geöffnet oder geschloßen. Das Gesicht folgt den Armen. Die Bauchmuskeln sind aktiv, leichte Rückbeuge im unteren Rücken.\n\n' +
        '3. Optional: Arme geöffnet, Gesicht zeigt nach vorne, vorderes Bein ist nur leicht gebeugt.\n',
      watchout: 'Kniee sollten direkt über den Sprunggelenken sein.\n',
    },
    {
      id: '8',
      isFav: false,
      name: 'Krieger 2',
      sanskrit: 'Virabhadrasana 2',
      level: yogaLevel[0],
      type: asanaType[2],
      imgPath: [require('../assets/08_warrior2.jpg')],
      effect:
        'Stärkung der Wirbelsäulenstrecker\n',
      description:
        '1. Komme in die Ausgangsposition der seitlichen Winkelstellung.\n\n' +
        '2. Aktiviere deine Beine, vorderes Bein ist 90° gebeugt, die Arme sind in einer Linie zur Seite ausgestreckt.\n\n' +
        '3. Das Gesicht schaut zum vorderen Arm, Schultern ziehen wegn von den Ohren, Gesäß zieht mit dem Steißbein Richtung Matte.\n\n' +
        '4. Optional: Vorderes Bein nur leicht gebeugt. Verkleinere den Ausfallschritt. Strecke die Arme nur leicht.\n',
      watchout: 'Kniee sollten direkt über den Sprunggelenken sein.\n',
    },
    {
      id: '9',
      isFav: false,
      name: 'Bergstellung',
      sanskrit: 'Tadasana',
      level: yogaLevel[0],
      type: asanaType[2],
      imgPath: [
        require('../assets/09_Tadasana_front.jpg'),
        require('../assets/09_Tadasana_side.jpg'),
        require('../assets/09_tadasana_variation.jpeg'),
      ],
      effect:
        'Neutrale Position der Wirbelsäule, Verlängerung der Wirbelsäule für die natürliche Kurve im unteren Rücken \n\n' +
        'Aktivierung der Wirbelsäulenstrecker für Stabilität\n',
      description:
        '1. Komme in einen hüftbreiten Stand.\n\n' +
        '2. Die Kniee sind leicht gebeugt, der Bauch ist aktiv, Steißbein zieht Richtung Matte und die Wirbelsäule ist aufgerichtet.\n\n' +
        '3. Die Schultern rollen nach hinten unten, sodass sich automatisch das Brustbein aufrichtet. Arme sind am Oberkörper abgelegt.\n\n' +
        '4. Optional: Die Arme können über den Kopf gestreckt Richtung Himmel ziehen.\n',
      watchout: '',
    },
    {
      id: '10',
      isFav: false,
      name: 'Stuhl-Stellung',
      sanskrit: 'Utkatasana',
      level: yogaLevel[0],
      type: asanaType[2],
      imgPath: [
        require('../assets/10_Chair_side.jpeg'),
        require('../assets/10_Chair_front.jpeg'),
      ],
      effect:
        'Streckung der unteren Wirbelsäule\n\n' +
        'AKtivität der Wirbelsäulenstrecker für Stabilität\n\n' +
        'Dehnung des Muskels Latissimus dorsi mit Schulterrotation\n\n' +
        'Aktivierung der Schultermuskulatur durch das Heben der Arme\n',
      description:
        '1. Komme in einen hüftbreiten Stand und beuge die Kniee.\n\n' +
        '2. Schieb das Becken nach hinten, dabei öffnet sich der Brustkorb. Die Arme ziehen entlang der Ohren gestreckt in Richtung Himmel.\n',
      watchout:
        'Behalte die Kniee in einer Linien mit den Füßen, vermeide eine zu tiefe Beugung.\n\n' +
        'Aktiviere die Bauchmuskeln, wenn sich der Brustkorb öffnet. \n\n' +
        'Denke an eine gerade Wirbelsäule, vermeide einen Rundrücken oder Hohlkreuz.\n\n' +
        'Hebe das Brustbein und das Kinn leicht an.\n',
    },
    {
      id: '11',
      isFav: false,
      name: 'Kleiner Hund',
      sanskrit: 'Anahatasana',
      level: yogaLevel[1],
      type: asanaType[1],
      imgPath: [require('../assets/11_ExtendedPuppyPose.jpeg')],
      effect:
        'Wirbelsäulenbeugung\n\n' +
        'Dehnung der Schultermuskulatur\n',
      description:
        '1. Komme in den 4-Füßler-Stand.\n\n' +
        '2. Wandere mit den Händen zum Anfang deiner Matte. Setze das Becken mit der Ausatmung zurück und bleibe dabei auf Höhe deiner Kniee.\n\n' +
        '3. Senke den Oberkörper Richtung Matte, evtl. berühert das Kinn oder die Stirn die Matte.\n\n' +
        '4. Die Ellenbogen berühren nicht die Matte, die Arme bleiben weiterhin aktiv.\n\n' +
        '5. Das Gesäß sollte weiterhin auf Höhe der Kniee sein.\n',
      watchout:
        'Das Becken sollte direkt über den Knieen sein.\n\n' +
        'Die Stirn kann auf der Matte abgelegt sein.\n',
    },
    {
      id: '12',
      isFav: false,
      name: 'Kobra-Stellung',
      sanskrit: 'Bhujangasana',
      level: yogaLevel[0],
      type: asanaType[3],
      imgPath: [
        require('../assets/12_Cobra.jpeg'),
        require('../assets/12_Cobra_Variation1.jpg'),
      ],
      effect:
        'Verlängerung der Wirbelsäule\n\n' +
        'Natürliche Kurve im Bereich des Nackens und der Wirbelsäule\n\n' +
        'Stärkung der Wirbelsäulenstrecker\n',
      description:
        '1. Liege mit dem Bauch auf der Matte. Strecke dabei deine Beine aus.\n\n' +
        '2. Drücke deine Handflächen auf Höhe deiner Schultern in die Matte.\n\n' +
        '3. Aktiviere nun die Beine und drücke Füße, Oberschenkel und Becken in die Matte.\n\n' +
        '4. Mit der Einatmung drückst du die Hände soweit in die Matte, dass sich die Ellenbogen leicht beugen und sich der Oberkörper von der Matte abhebt. Hebe die Brust nur soweit, wie die Beine abgelegt sein können. \n\n' +
        "5. Du solltest keinen Druck im unteren Rücken spüren. Das Gesäß sollte nicht angespannt sein.\n",
      watchout:
        'Aktiviere deine Bauchmuskeln.\n\n' +
        'Vermeide ein Hohlkreuz im unteren Rücken.\n\n' +
        'Vermeide eine Überstreckung in der Nackenmuskulatur.\n',
    },
    {
      id: '13',
      isFav: false,
      name: 'Halbe Vorwärtsbeuge',
      sanskrit: 'Ardha Uttanasana',
      level: yogaLevel[1],
      type: asanaType[2],
      imgPath: [
        require('../assets/13_halfForwardBend.jpeg'),
        require('../assets/13_halfForwardBend_Variation1.jpg'),
      ],
      effect: 'Stärkung der Wirbelsäulenstrecker\n\n',
      description:
        '1. Komme in einen hüftbreiten Stand und presse die Füße in die Matte. Beuge dich nach vorne, achte darauf, dass die Wirbelsäule gerade ist, evtl. musst du die Beine beugen.\n\n' +
        '2. Berühre mit den Fingern die Matte. Wenn das nicht möglich ist, bringe die Hände an die Unterschenkel.\n\n' +
        '3. Rolle die Schulter nach hinten und lasse den Kopf hängen.\n',
      watchout: 'Achte auf die gerade Wirbelsäule, vermeide einen Rundrücken.\n',
    },
    {
      id: '14',
      isFav: false,
      name: 'Vorwärtsbeuge',
      sanskrit: 'Uttanasana',
      level: yogaLevel[1],
      type: asanaType[2],
      imgPath: [require('../assets/14_forwardBend.jpeg')],
      effect:
        'Wirbelsäulenbeugung \u2794 tiefe Wirbelsäulendehnung\n\n' +
        'Dehnung der Wirbelsäulenstrecker und des Muskels latissimus dorsi\n',
      description:
        '1. Komme in einen hüftbreiten Stand. Strecke die Beine, runde den Rücken und lasse die Finger Richtung Boden sinken.\n\n' +
        '2. Der Bauch berühert evtl. die Oberschenkel, der Kopf ist entspannt.\n',
      watchout:
        'Die Wirbelsäule ist gerundet.\n\n' +
        'Komme vorsichtig in die Vorbeuge und aus der Vorbeuge. Aktiviere dabei die Bauchmuskulatur und achte auf den unteren Rücken.\n\n' +
        'Die Kniee können leicht gebeugt sein.\n',
    },
    {
      id: '15',
      isFav: false,
      name: 'Schulterbrücke',
      sanskrit: 'Setu Bandha Sarvangasana',
      level: yogaLevel[1],
      type: asanaType[4],
      imgPath: [require('../assets/15_Bridge.jpeg')],
      effect: 'Stärkung der Wirbelsäulenstrecker \n',
      description:
        '1. Lege dich mit dem Rücken auf die Matte. Drücke die Ellenbogen seitlich am Oberkörper in die Matte.\n\n' +
        '2. Die Schulterblätter ziehen zueinander, die Nackenmuskulatur bleibt lang und entspannt.\n\n' +
        '3. Stelle die Füße nah am Gesäß hüftbreit in die Matte und drücke die Fersen in den Boden. Hebe dann das Gesäß vom Boden.\n',
      watchout:
        'Die Knie stehen direkt auf Höhe des Beckens.\n\n' +
        'Vermeide ein nach Außen- oder Innenfallen der Kniee.\n',
    },
    {
      key: '16',
      isFav: false,
      name: 'Krokodil-Stellung',
      sanskrit: 'Makarasana',
      level: yogaLevel[0],
      type: asanaType[3],
      imgPath: [require('../assets/16_Crocodile.jpeg')],
      effect:
        'Wirbelsäulenrotation \n\n' +
        'Dehnung der Leiste und Flanke\n',
      description:
        '1. Lege dich auf den Rücken, die Arme sind auf der Matte ausgestreckt auf Höhe der Schultern.\n\n' +
        '2. Mit der Einatmnung hebe die Beine 90° an, sodass die Unterschenkel parallel zum Boden und die Kniee auf Höhe der Hüften sind.\n\n' +
        '3. Mit der Ausatmung bringe beide Beine auf die linke Seite bis sie den Boden berühren.\n\n' +
        '4. Während der Übung sind die Beine die ganze Zeit fest zusammen.\n\n' +
        '5. Der Rücken und die Schultern sollten weiterhin auf der Matte liegen.\n\n' +
        '6. Optimalerweise sollte auch der untere Rücken auf der Matte liegen, sodass sich nur das Becken von einer zur anderen Seite bewegt.\n\n' +
        '7. Wenn die Seite gewechselt wird und die Beine sich nach rechts ablegen, müssen die Bauchmuskeln aktiv sein.\n',
      watchout:
        'Die Schultern sollten auf der Matte liegen. Wenn das nicht möglich ist, benutze ein Kissen oder eine Decke.\n\n' +
        'Schaue mit dem Gesicht in die entgegengesetzte Seite der Beine.\n',
    },
    {
      id: '17',
      isFav: false,
      name: 'Päckchen-Stellung',
      sanskrit: 'Apanasana',
      level: yogaLevel[0],
      type: asanaType[3],
      imgPath: [require('../assets/17_Knees-to-Chest.jpeg')],
      effect: 'Abbau von Spannungen im unteren Rücken\n',
      description:
        '1. Lege dich auf den Rücken und ziehe die Kniee zur Brust.\n\n' +
        '2. Atme ein und drücke die Kniee leicht von dir weg. Atme aus und ziehe die Beine wieder zu dir.\n',
      watchout: '',
    },
    {
      id: '18',
      isFav: false,
      name: 'Sitzender Twist',
      sanskrit: 'Parivrtta Sukhasana',
      level: yogaLevel[0],
      type: asanaType[0],
      imgPath: [
        require('../assets/18_SeatedSpinalTwist_front.jpeg'),
        require('../assets/18_SeatedSpinalTwist_side.jpeg'),
      ],
      effect:
        'Steigerung der Flexibilität im unteren Rücken\n\n' +
        'Dehnung der Rückenmuskulatur\n',
      description:
        '1. Setze dich auf die Matte und strecke die Beine aus. Die Hände liegen auf den Oberschenkeln. \n\n' +
        '2. Beuge das rechte Knie und stelle es über das linke Bein, sodass der Fuß die Außenseite des linken Oberschenkels berühert.\n\n' +
        '3. Beuge das linke Knie und bringe das linke Sprunggelenk zum rechten Gesäß. Erde deine Sitzbeinhöcker für einen geraden Sitz.\n\n' +
        '4. Strecke den rechten Arm nach hinten aus und berühre mit den Fingerspitzen den Boden. Drehe dich mit dem Oberkörper nach rechts.\n'+
        '5. Umfasse mit dem linken Arm das Knie. Wechsel dann die Seite.\n',
      watchout: 'Der Kopf ist in einer Linie mit der Wirbelsäule.\n\n',
    },
    {
      id: '19',
      isFav: false,
      name: 'Bewegte Katze',
      sanskrit: 'Cakravakasana',
      level: yogaLevel[1],
      type: asanaType[1],
      imgPath: [
        require('../assets/19_BalancingCatPose_Variant1.jpeg'),
        require('../assets/19_BalancingCatPose_Variant2.jpeg'),
      ],
      effect: 'Neutrale Position der Wirbelsäule\n',
      description:
        '1. Komme in einen 4-Füßler Stand mit den Händen unter den Schultern. \n\n' +
        '2. Strecke ein Bein nach hinten aus, hebe es bis auf die Höhe deiner Hüfte an ohne dass das Becken zu einer Seite fällt.\n\n' +
        '3. Atme ein und strecke den entgegengesetzten Arme nach vorne aus.\n\n' +
        '4. Die Wirbelsäule sollte gerade sein und der Kopf sollte in einer Linie mit der Wirbelsäule sein.\n\n' +
        '5. Strecke den Arm bis auf Schulterhöhe aus, Finger sind gestreckt und dann atme aus. Optional kannst du mit der Ausatmung Ellenbogen und Knie unterhalb deines Bauches zueinanderziehen.\n',
      watchout:
        'Achte auf den geraden Rücken und dass die Wirbelsäule in einer Linie gestreckt ist.\n\n' +
        'Das Becken sollte auf einer Höhe sein und nicht zu einer Seite ausweichen.\n',
    },
    {
      id: '20',
      isFav: false,
      name: 'Stuhl- Position - Variation Katze/Kuh',
      sanskrit: 'Utkatasana',
      level: yogaLevel[1],
      type: asanaType[2],
      imgPath: [
        require('../assets/20_Chair_CatCowVariant1.jpeg'),
        require('../assets/20_Chair_CatCowVariant2.jpeg'),
      ],
      effect:
        'Wirbelsäulenstreckung und -beugung \n\n' +
        'Aktivierung der Wirbelsäulenstrecker für Stabilität\n\n' +
        'Dehnung der Wirbelsäulenmuskulatur\n',
      description:
        '1. Komme in die Berghaltung. Atme ein und hebe die Arme seitlich nach oben Richtung Himmel.\n\n' +
        '2. Atme aus und beuge die Knie, halte dabei die Oberschenkel parallel zueinander.\n\n' +
        '3. Die Schulterblätter ziehen nach hinten unten.\n\n' +
        '4. Das Steißbein zieht nach unten Richtung Boden.\n\n' +
        '5. Lege die Hände auf die Oberschenkel und wechsel langsam von Katze zu Kuh-Position.\n',
      watchout:
        'Die Kniee sollte auf einer Linie mit den Füßen sein, sodass die Kniee nicht über die Zehen schauen.\n\n' +
        'Aktiviere die Bauchmuskulatur, um ein Hohlkreuz zu vermeiden.\n\n' 
       
    },
    {
      id: '21',
      isFav: false,
      name: 'Heuschrecke',
      sanskrit: 'Shalabhasana',
      level: yogaLevel[1],
      type: asanaType[3],
      imgPath: [require('../assets/21_LocustPose.jpeg')],
      effect:
        'Wirbelsäulenstreckung \u2794 Stärkung der Wirbelsäulenmuskulatur\n\n' +
        'Aktivierung der Halswirbelsäulenstrecker, um die Nackenmuskulatur zu verlängern \n',
      description:
        '1. Lege dich auf den Bauch.\n\n' +
        '2. Strecke deine Arme seitlich am Orberkörper nach hinten aus.\n\n' +
        '3. Die Schulterblätter ziehen zusammen und die Schultern rollen nach hinten unten.\n\n' +
        '4. Mit der Einatmung hebst du den Oberkörper, die Arme und Beine an.\n',
      watchout:
        'Lass die Beine gestreckt.\n\n' +
        'Ziehe die Schultern weg von den Ohren, die Schulterblätter sollten sich berühren.\n\n' +
        'Bei Schmerzen im Nacken schaue mit dem Gesicht Richtung Matte. \n',
    },
    {
      id: '22',
      isFav: false,
      name: 'Halbe Heuschrecke',
      sanskrit: 'Ardha Shalabhasana',
      level: yogaLevel[1],
      type: asanaType[3],
      imgPath: [
        require('../assets/22_HalfLocustPose_ExtendedExtremities.jpeg'),
      ],
      effect:
        'Wirbelsäulenstreckung \u2794 Stärkung der Wirbelsäulenstreckermuskulatur\n',
      description:
        '1. Lege dich auf den Bauch.\n\n' +
        '2. Bringe die Arme unter den Körper, sodass die Unterarme und Hände unter dem Bauch und Oberschenkel liegen.\n\n' +
        '3. Atme ein und strecke die Beine.\n\n' +
        '4. Drücke die Arme in den Boden und dann hebe langsam die Beine an.\n',
      watchout:
        'Lass die Beine gestreckt.\n\n' +
        'Variante 1: diagonal, Hebe den Arm und das entgegengesetzte Bein gleichzeitig an.\n\n' +
        'Variante 2: Hebe zusätzlich den Oberkörper an.\n',
    },
    {
      id: '23',
      isFav: false,
      name: 'Heuschrecke - Variation mit gestreckten Armen',
      sanskrit: 'Shalabhasana',
      level: yogaLevel[1],
      type: asanaType[3],
      imgPath: [require('../assets/23_LocustArmFront.jpeg')],
      effect:
        'Wirbelsäulenstreckung \u2794 Stärkung der Wirbelsäulenstreckermuskulatur\n',
      description:
        '1. Lege dich auf den Bauch.\n\n' +
        '2. Strecke die Arme vor dir aus.\n\n' +
        '3. Mit der Einatmung hebe die Arme und die Beine.\n',
      watchout:
        'Dynamische Variante: Mache Schwimmbewegungen mit ausgestreckten Armen und Beinen.\n',
    },
    {
      id: '24',
      isFav: false,
      name: 'Sphinx Stellung',
      sanskrit: 'Salamba Bhujangasana',
      level: yogaLevel[0],
      type: asanaType[3],
      imgPath: [require('../assets/24_Sphinx.jpg')],
      effect:
        'Verlängerung der Wirbelsäule\n\n' +
        'Natürliche Kurve der Wirbelsäule\n\n' +
        'Stärkung der Wirbelsäulenstreckermuskulatur\n',
      description:
        '1. Komme in die Bauchlage, die Unterarme sind abgelegt und die Ellenbogen drücken unterhalb der Schultern in die Matte.\n\n' +
        '2. Die Beine sind gestreckt und berühren sich. Das Schambein drückt in die Matte.\n\n' +
        '3. Hebe nun mit der Einatmung den Oberkörper und bleibe für ein paar Atemzüge in dieser Position.\n\n' +
        '4. Komme dann mit der Ausatmung langsam wieder mit dem Oberkörper Richtung Matte auf den Bauch.\n',
      watchout:
        'Lange und starke Wirbelsäule, vermeide ein Hohlkreuz.\n\n' +
        'Langer Nacken. \n\n' +
        'Hebe dein Kinn. \n',
    },
    {
      id: '25',
      isFav: false,
      name: 'Torhaltung',
      sanskrit: 'Parighasana',
      level: yogaLevel[0],
      type: asanaType[1],
      imgPath: [require('../assets/25_GatePose.jpeg')],
      effect:
        'Laterale Wirbelsäulenbeugung \n\n' +
        'Halswirbelsäulenrotation \n',
      description:
        '1. Komme mit den Knien auf die Matte und strecke dein rechtes Bein seitlich aus.\n\n' +
        '2. Der rechte Arm liegt auf dem rechten Bein oder Knöchel, hebe den linken Arm gestreckt über den Kopf.\n',
      watchout:
        'Vermeide es die Hand direkt auf das Knie zu legen, um zusätzlichen Druck auf das Gelenk zu vermeiden.\n\n' +
        'Stütze dich nicht mit dem Körpergewicht auf das Bein, die Bauchmuskulatur sollte aktiv sein.\n\n' +
        'Du kannst die Hand auch auf einen Yogablock abstützen statt auf das ausgestreckte Bein.\n\n' +
        'Der Oberkörper ist in einer Linie mit den Beinen, Schulter und Brust fallen nicht nach vorne.\n\n' +
        'Bei Nackenschmerzen schaue gerade aus statt den Blick nach oben zu richten.\n',
    },
    {
      id: '26',
      isFav: false,
      name: 'Pyramidenstellung ',
      sanskrit: 'Parsvottanasana',
      level: yogaLevel[0],
      type: asanaType[2],
      imgPath: [
        require('../assets/26_Pyramid.jpeg'),
        require('../assets/26_Pyramid_Variation.jpg'),
      ],
      effect: 'Laterale Dehnung\n\n',
      description:
        '1. Stehe ungefähr fussbreit auf der Matte, Hände sind an der Hüfte.\n\n' +
        '2. Lehne dich mit deinen Oberkörper über dein rechtes gestrecktes Bein, sodass die Wirbelsäule noch gerade bleibt. \n\n' +
        '3. Berühre mit den Fingerspitzen den Boden.\n\n' +
        '4. Behalte die Spannung in den Beinen, die Brust ist nach vorne gebeugt. Beide Fersen drücken in die Matte.\n',
      watchout:
        'Lange und gerade Wirbelsäule, vermeide einen Rundrücken.\n\n' +
        'Behalte das Becken parallel, evtl. verkleinere den Schritt.\n',
    },
    {
      id: '27',
      isFav: false,
      name: 'Ausgestrecktes Dreieck',
      sanskrit: 'Utthita Trikonasana',
      level: yogaLevel[1],
      type: asanaType[2],
      imgPath: [require('../assets/27_ExtendedTrianglePose.jpeg')],
      effect: 'Stärkung der Wirbelsäulenstreckermuskulatur\n\n',
      description:
        '1. Stelle dich eine Fußlänge breit auf die Matte, Beine sind gestreckt.\n\n' +
        '2. Drehe den rechten Fuß nach außen und den linken parallel zum hinteren Mattenrand. Die Fersen sollten in einer Linie seinTurn the right foot completely to the outside and the left foot a bit inside, keeping the heels in line with the hips.\n\n' +
        '3. Die Arme sind seitlich ausgestreckt, die Handflächen zeigen zur Matte.\n\n' +
        '4. Der Oberkörper lehnt sich soweit wie möglich nach rechts.\n\n' +
        '5. Der linke Arm ist Richtung Himmel ausgestreckt und der rechte Arm zieht zum rechten Fuß. Oberkörper und Wirbelsäule öffnen nach links.\n\n' +
        '6. Die Arme sind ausgestreckt, das Gesicht schaut Richtung linken Arm, dadurch wird der Twist intensiviert.\n',
      watchout:
        'Aktiviere die Bauchmuskulatur.\n\n' +
        'Die Schultern sind auf einer Höhe. Vermeide es mit der oberen Schulter nach vorne zu fallen.\n\n' +
        'Lasse die Beine gestreckt. Wenn die Hand den Fuß nicht berühert, nimm dir ein Buch oder einen Yogablock zur Hilfe.\n\n' +
        'Bei Nackenschmerzen schaue geradeaus statt den Blick nach oben zu richten.\n',
    },
    {
      id: '28',
      isFav: false,
      name: 'Kopf-an-Knie-Stellung',
      sanskrit: 'Janu Shirshasana',
      level: yogaLevel[0],
      type: asanaType[0],
      imgPath: [require('../assets/28_SeatedForwardBend.jpeg')],
      effect: 'Dehnung der Wirbelsäulenstreckermuskulatur \n\n',
      description:
        '1. Setze dich auf die Matte.\n\n' +
        '2. Strecke die Beine vor dir aus. Ein Bein ist gebeugt, der Fuß berühert die Inneseite des Oberschenkels.\n\n' +
        '3. Mit der Einatmung hebe die Arme gestreckt über deinen Kopf.\n\n' +
        '4. Mit der Ausatmung lasse den Oberkörper über dein gestrecktes Bein sinken.\n\n' +
        '5. Lasse die Arme Richtung Beine sinken, greife wenn möglich dein Knöchel oder Fuß.\n',
      watchout:
        'Versuche lang und gerade in der Wirbelsäule zu bleiben statt zu tief in die Vorbeuge zu gehen.\n\n' +
        'optional: Setze dich auf eine gefaltete Decke oder ein Kissen.\n',
    },
    {
      id: '29',
      isFav: false,
      name: 'Halber Drehsitz',
      sanskrit: 'Ardha Matsyendrasana',
      level: yogaLevel[1],
      type: asanaType[0],
      imgPath: [
        require('../assets/29_HalfSpinalTwist_front.jpeg'),
        require('../assets/29_HalfSpinalTwist_side.jpeg'),
      ],
      effect:
        'Wirbelsäulenrotation \u2794 compression if the intervertebral discs\n\n' +
        'Stärkung der Wirbelsäulenstreckermuskulatur\n\n' +
        'Dehnung des Muskels Latissimus dorsi\n',
      description:
        '1. Setze dich auf deine Fersen. Lass das Gesäß auf die linke Seite Richtung Boden sinken.\n\n' +
        '2. Beuge dein rechtes Bein. Kreuze dein rechtes Bein über das linke, sodass der rechte Fuß die Außenseite des linken Oberschenkels berühert.\n\n' +
        '3. Strecke die Arme aus und setze deine rechte Hand hinter dir auf die Matte.\n\n' +
        '4. Wenn möglich, bringe deinen linken Arm am rechten Bein vorbei.\n\n' +
        '5. Halte einen Moment und wiederhole die Position auf der anderen Seite.\n',
      watchout:
        'Gerade Wirbelsäule, die lange Wirbelsäule sollte wichtiger als der Twist sein.\n\n' +
        'Ziehe deine Schultern nach hinten unten.\n\n' +
        'Im Twist schaue mit dem Gesicht nach hinten über deine Schulter.\n',
    },
    {
      id: '30',
      isFav: false,
      name: 'Kamel',
      sanskrit: 'Ustrasana',
      level: yogaLevel[1],
      type: asanaType[1],
      imgPath: [
        require('../assets/30_Camel.jpeg'),
        require('../assets/30_Camel_Variant.jpeg'),
      ],
      effect:
        'Wirbelsäulenstreckung, Verlängerung des Nackens\n\n' +
        'Stärkung der Wirbelsäulenstreckermuskulatur\n\n',
      description:
        '1. Setze dich in einen Fersensitz. Bringe die Hände an den unteren Rücken, um die Rückbeuge zu unterstützen.\n\n' +
        '2. Komme in einen Fersenstand, die Oberschenkel sollten in einem Winkel zu den Unterschenkeln sein.\n\n' +
        '3. Strecke die Arme nach oben und wenn möglich, bringe eine Hand nach der anderen zu den Fersen.\n\n' +
        '4. Spanne die Gesäßmuskulatur und die Oberschenkel leicht an, um die Stabilität zu halten.\n',
      watchout:
        'Knie sind hüftbreit geöffnet.\n\n' +
        'Das Becken ist direkt über den Knien.\n\n' +
        'AKtiviere die Bauchmuskulatur.\n\n' +
        'Vermeide eine Überdehnung der Halsmuskulatur.\n',
    },
    {
      id: '31',
      isFav: false,
      name: 'Stockhaltung',
      sanskrit: 'Chaturanga Dandasana',
      level: yogaLevel[1],
      type: asanaType[3],
      imgPath: [
        require('../assets/31_LowPlank.jpg'),
        require('../assets/31_LowPlank_Variation1.jpg'),
      ],
      effect:
        'Neutrale Position der Wirbelsäule\n\n' +
        'Stärkung der Wirbelsäulenstreckermuskulatur und Schultern\n',
      description:
        '1. Komme in einen 4-Füßler-Stand. Die Hände sind unter den Schultern und die Kniee unter den Hüften.\n\n' +
        '2. Löse die Kniee langsam vom Boden und strecke die Beine, sodass du in eine Bretthaltung kommst. Bauchmuskeln, Gesäß und Oberschenkel sind angespannt.\n\n' +
        '3. Beuge leicht die Oberarme. Hände und Zehen drücken in die Matte und bauen Spannung auf.\n',
      watchout: 'Die Bauchmuskulatur ist aktiv, damit der Bauch nicht Richtung Matte sinkt.\n',
    },
    {
      id: '32',
      isFav: false,
      name: 'Unterarmstütz',
      sanskrit: 'Makara Adho Mukha Svanasana',
      level: yogaLevel[0],
      type: asanaType[3],
      imgPath: [require('../assets/32_ElbowPlank.jpg')],
      effect:
        'Neutrale Position der Wirbelsäule\n\n' +
        'Stärkung der Wirbelsäulenstreckermuskulatur und Schultern\n',
      description:
        '1. Komme in die Bauchlage und drücke die Unterarme in die Matte. Zehen drücken aktiv in die Matte. Hebe jetzt die Kniee und komm in den Unterarmstütz.\n\n' +
        '2. Bleibe mit deinem Körper in einer Linie von der Fußspitze bis zum Scheitel.\n\n',
      watchout: 'Die komplette Bauchmuskulatur ist aktiv.\n',
    },
    {
      id: '33',
      isFav: false,
      name: 'Sitzende Vorbeuge',
      sanskrit: 'Paschimottanasana',
      level: yogaLevel[0],
      type: asanaType[0],
      imgPath: [require('../assets/33_SeatedForwardBend.jpeg')],
      effect:
        'Wirbelsäulenbeugung\n\n' +
        'Dehnung der Wirbelsäulenstrecker\n',
      description:
        '1. Setze dich mit ausgestreckten Beinen auf die Matte, die Füße berühren sich und die Hände liegen auf den Oberschenkeln.\n\n' +
        '2. Mit der Einatmung hebe die gestreckten Arme über den Kopf und mache die Wirbelsäule lang.\n\n' +
        '3. Mit der Ausatmung lasse den Oberkörper Richtung gestreckter Beine sinken, die Hände können die Füße greifen.\n',
      watchout:
        'Lass die Beine in einer neutralen Position, die Füße sollten weder nach außen noch nach innen fallen. \n',
    },
    {
      id: '34',
      isFav: false,
      name: 'Brücke',
      sanskrit: 'Chakrasana',
      level: yogaLevel[1],
      type: asanaType[4],
      imgPath: [require('../assets/34_Wheel.jpeg')],
      effect:
        'Wirbelsäulenstreckung \u2794 Stärkung der Wirbelsäulenstreckermuskulatur\n\n' +
        'Verlängerung der unteren Wirbelsäule\n\n' +
        'Stärkung der Schultern\n',
      description:
        '1. Lege dich auf den Rücken. Bringe deine Hände nah an die Ohren, Fingerspitzen schauen zu den Schultern. Die Arme bleiben parallel.\n\n' +
        '2. Die Handflächen sollten in die Matte drücken und möglichst nah an den Schultern sein.\n\n' +
        '3. Stelle die Füße hüftbreit, nah am Gesäß, auf.\n\n' +
        '4. Löse das Becken und den Oberkörper von der Matte und verlagere das Gewicht auf Hände und Füße. Strecke jetzt die Arme und Beine.\n\n' +
        '5. Hebe das Becken soweit es geht und löse den Kopf vom Boden.\n',
      watchout:
        'Kniee sollten über den Fersen sein.\n\n' +
        'Die Kniee und Oberschenkel sollten parallel sein, evtl. bringe einen Yogablock zwischen die Beine.\n\n' +
        'Die Gesäßmuskulatur ist entspannt.\n',
    },
    {
      id: '35',
      isFav: false,
      name: 'Gegrätschte Vorbeuge',
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
        'Wirbelsäulenbeugung \u2794 tiefe Wirbelsäulendehnung\n\n' +
        'Dehnung der Wirbelsäulenstreckermuskulatur und des Muskels Latissimus dorsi\n',
      description:
        '1. Komme in die Berghaltung. Öffne dann die Beine zur Seite in die Grätsche.\n\n' +
        '2. Strecke die Arme zur Seite aus.\n\n' +
        '3. Die Füße sind parallel zu den Mattenrändern und die Zehen zeigen nach vorne.\n\n' +
        '4. Spanne die Oberschenkelmuskulatur an und verlagere dein Gewicht auf die Füße.\n\n' +
        '5. Mit der Einatmung hebe die Arme auf Höhe deiner Schultern und mit der Ausatmung lasse dein Gewicht nach vorne fallen.\n\n' +
        '6. Bleibe lang in der Wirbelsäule. Beuge den Oberkörper nach vorne, lass den Brustkorb dabei geöffnet.\n\n' +
        '7. Wenn möglich, lege die Hände auf den Boden ab. Der Kopf hängt entspannt nach unten. Steißbein zieht in die Höhe. \n',
      watchout:
        'Die Kniee können leicht gebeugt sein.\n\n' +
        'Die Hüften sind in einer Linie mit den Knöcheln.\n\n' +
        'Mache den Schritt größer, damit die Finger den Boden berühren.\n\n' +
        'Du kannst einen Yogablock zur Hilfe nehmen.\n\n' +
        'Denke an die gerade Wirbelsäule.\n\n' +
        'Variante 1: Bring die Hände hinter deinem Rücken zusammen. Beuge dich nach vorne und lass die Arme gestreckt nach vorne fallen.\n\n' +
        'Variante 2: Bring in der Vorwärtsbeuge beide Arme zu einem Knöchel.\n',
    },
    {
      id: '36',
      isFav: false,
      name: 'Sitzhaltung',
      sanskrit: 'Siddhasana',
      level: yogaLevel[0],
      type: asanaType[0],
      imgPath: [require('../assets/36_Siddhasana_Variation1.jpg')],
      effect:
        'Neutrale Wirbelsäule\n\n' +
        'Verlängerung der Wirbelsäule\n\n' +
        'Stärkung der Wirbelsäulenstreckermuskulatur\n',
      description:
        '1. Setze dich mit ausgestreckten Beinen auf den Boden.\n\n' +
        '2. Behalte die Wirbelsäule gerade, die Hände berühren den Boden.\n\n' +
        '3. Beuge das linke Knie und bring den linken Knöchel nah an den Körper.\n\n' +
        '4. Beuge das rechte Knie und lege es vor den linken Knöchel. Wenn möglich, lege den rechten Knöchel über den linken Knöchel.\n\n' +
        '5. Suche dir eine bequeme Handposition aus. Lege die Hände entweder auf die Oberschenkel oder Kniee.\n',
      watchout:
        'Hebe den Kopf leicht an.\n\n' +
        'Die Schultern sinken nach hinten unten.\n\n' +
        'Variante: Kreuze deine Beine auf Höhe der Schienbeine.\n',
    },
    {
      id: '37',
      isFav: false,
      name: 'Brettposition',
      sanskrit: 'Phalakasana',
      level: yogaLevel[1],
      type: asanaType[3],
      imgPath: [
        require('../assets/37_HighPlank.jpg'),
        require('../assets/37_HighPlank_Variation.jpg'),
      ],
      effect:
        'Neutrale Position der Wirbelsäule\n\n' +
        'Stärkung der Wirbelsäulenstreckermuskulatur und Schultern\n',
      description:
        '1. Komme in einen 4-Füßler Stand. Die Hände sind unter den Schultern und die Kniee unter den Hüften.\n\n' +
        '2. Löse die Kniee vom Boden und strecke langsam die Beine aus. Bauchmuskulatur, Gesäß und Oberschenkel sind aktiv.\n\n' +
        '3. Der komplette Körper ist in einer Linie, die Zehen drücken in die Matte und der Brustkorb bleibt geöffnet. Das Gesäß bleibt tief.\n',
      watchout: 'Die komplette Bauchmuskulatur ist aktiv.\n',
    },
  ];
}
