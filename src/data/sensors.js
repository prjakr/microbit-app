// KEYESTUDIO 37センサースターターキット for Microbit
export const sensors = [
  {
    id: 1,
    name: "しろいLED",
    nameEn: "White LED Module",
    emoji: "💡",
    category: "ひかり",
    color: "#FFF9C4",
    description: "しろいひかりをひからせるモジュールです。でんきがながれるとひかります。",
    howItWorks:
      "LED（はっこうダイオード）は、でんきのエネルギーをひかりのエネルギーにかえます。アナログのPINにつなぐと、ひかりのつよさをかえることもできます。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0ピン → S（シグナル）\n3.3V → +（プラス）\nGND → -（マイナス）",
    sampleCode: `// しろいLEDをてんめつさせる
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)  // ひかる
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P0, 0)  // きえる
    basic.pause(500)
})`,
    difficulty: 1,
    tags: ["LED", "デジタル出力", "ひかり"],
  },
  {
    id: 2,
    name: "RGB LED",
    nameEn: "RGB LED Module",
    emoji: "🌈",
    category: "ひかり",
    color: "#E1BEE7",
    description: "あか・みどり・あおの3しょくのひかりをまぜて、いろんないろをひからせることができます。",
    howItWorks:
      "RGB LEDは3つのLEDがひとつになっています。あか・みどり・あおそれぞれのあかるさをかえることで、まぜあわさったいろになります。",
    pins: { red: "P0", green: "P1", blue: "P2", gnd: "GND" },
    wiring: "P0ピン → あか（R）\nP1ピン → みどり（G）\nP2ピン → あお（B）\nGND → マイナス",
    sampleCode: `// いろいろないろをひからせる
pins.analogWritePin(AnalogPin.P0, 1023) // あか
pins.analogWritePin(AnalogPin.P1, 0)
pins.analogWritePin(AnalogPin.P2, 0)
basic.pause(1000)
pins.analogWritePin(AnalogPin.P0, 0)    // みどり
pins.analogWritePin(AnalogPin.P1, 1023)
pins.analogWritePin(AnalogPin.P2, 0)
basic.pause(1000)`,
    difficulty: 2,
    tags: ["LED", "アナログ出力", "ひかり"],
  },
  {
    id: 3,
    name: "しんごうきモジュール",
    nameEn: "Traffic Light Module",
    emoji: "🚦",
    category: "ひかり",
    color: "#C8E6C9",
    description: "あか・きいろ・みどりの3つのLEDがついたしんごうきのようなモジュールです。",
    howItWorks:
      "3つのLEDが1つの基板にならんでいます。それぞれのPINをON/OFFすることで、しんごうのようにじゅんばんにひかります。",
    pins: { red: "P0", yellow: "P1", green: "P2", gnd: "GND" },
    wiring: "P0 → あか\nP1 → きいろ\nP2 → みどり\nGND → マイナス",
    sampleCode: `// しんごうきのプログラム
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1) // あか
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1) // きいろ
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1) // みどり
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})`,
    difficulty: 2,
    tags: ["LED", "デジタル出力", "ひかり"],
  },
  {
    id: 4,
    name: "ボタンモジュール",
    nameEn: "Push Button Module",
    emoji: "🔘",
    category: "にゅうりょく",
    color: "#BBDEFB",
    description: "おすとONになるボタンです。ボタンをおしている間、でんきがながれます。",
    howItWorks:
      "ボタンをおすと2つのきんぞくがふれあって、でんきがながれます。はなすと、バネのちからでもとにもどります。デジタルのHIGH（1）かLOW（0）かでよみとります。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S（シグナル）\n3.3V → VCC\nGND → GND",
    sampleCode: `// ボタンをおしたらLEDをひかす
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})`,
    difficulty: 1,
    tags: ["ボタン", "デジタル入力"],
  },
  {
    id: 5,
    name: "タッチセンサー",
    nameEn: "Capacitive Touch Sensor",
    emoji: "👆",
    category: "にゅうりょく",
    color: "#B3E5FC",
    description: "ゆびでさわるだけでかんちできるセンサーです。ボタンのようにおさなくてもはたらきます。",
    howItWorks:
      "にんげんのからだには少しのでんきがあります。センサーにさわると、そのでんきのへんかをかんちしてONになります。これを「しずかい（静電容量）方式」といいます。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S（シグナル）\n3.3V → VCC\nGND → GND",
    sampleCode: `// タッチするとおとがなる
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        music.playTone(262, 500) // ド
    }
})`,
    difficulty: 1,
    tags: ["タッチ", "デジタル入力"],
  },
  {
    id: 6,
    name: "かたむきセンサー",
    nameEn: "Tilt Switch Sensor",
    emoji: "↗️",
    category: "うごき",
    color: "#FFE0B2",
    description: "センサーをかたむけるとON/OFFがきりかわります。たまごのなかのボールのような仕組みです。",
    howItWorks:
      "センサーのなかに小さなボールがはいっています。まっすぐのときはボールがきんぞくにさわってでんきがながれます。かたむけるとボールがころがってでんきがながれなくなります。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S\n3.3V → VCC\nGND → GND",
    sampleCode: `// かたむけたら表示をかえる
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showArrow(ArrowNames.South)
    }
})`,
    difficulty: 1,
    tags: ["かたむき", "デジタル入力", "うごき"],
  },
  {
    id: 7,
    name: "しんどうセンサー",
    nameEn: "Vibration Sensor",
    emoji: "📳",
    category: "うごき",
    color: "#FFCCBC",
    description: "ふるえや衝撃をかんちするセンサーです。たたいたりゆらしたりするとはんのうします。",
    howItWorks:
      "センサーのなかにとても細いバネのようなものがはいっています。ふるえるとこのバネがふれて、でんきのかんちができます。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S\n3.3V → VCC\nGND → GND",
    sampleCode: `// しんどうをかんちしたら表示する
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showIcon(IconNames.Surprised)
        basic.pause(500)
        basic.clearScreen()
    }
})`,
    difficulty: 1,
    tags: ["しんどう", "デジタル入力", "うごき"],
  },
  {
    id: 8,
    name: "こうどセンサー（ひかり）",
    nameEn: "Photoresistor Light Sensor",
    emoji: "☀️",
    category: "かんきょう",
    color: "#FFF9C4",
    description: "まわりのひかりのあかるさをはかるセンサーです。ひかりがつよいと数値がかわります。",
    howItWorks:
      "こうどセンサー（フォトレジスタ）はひかりがあたるとていこう（でんきのながれにくさ）がかわります。アナログの数値でよみとります。0〜1023の数値で、くらいほど大きい数になります。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S（アナログ）\n3.3V → VCC\nGND → GND",
    sampleCode: `// ひかりのあかるさを表示する
basic.forever(function () {
    let hikari = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(hikari)
    basic.pause(500)
})`,
    difficulty: 2,
    tags: ["ひかり", "アナログ入力", "かんきょう"],
  },
  {
    id: 9,
    name: "おとセンサー",
    nameEn: "Sound Sensor",
    emoji: "🎤",
    category: "かんきょう",
    color: "#E8EAF6",
    description: "まわりの音の大きさをかんちするセンサーです。こえや音がするとはんのうします。",
    howItWorks:
      "小さなマイクがはいっています。音はくうきのしんどう（振動）です。マイクはそのしんどうをでんきのかわりに変えます。数値が大きいほど音が大きいです。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S（アナログ）\n3.3V → VCC\nGND → GND",
    sampleCode: `// 音の大きさを表示する
basic.forever(function () {
    let oto = pins.analogReadPin(AnalogPin.P0)
    if (oto > 600) {
        basic.showIcon(IconNames.EigthNote)
    } else {
        basic.clearScreen()
    }
})`,
    difficulty: 2,
    tags: ["おと", "アナログ入力", "かんきょう"],
  },
  {
    id: 10,
    name: "おんどセンサー（LM35）",
    nameEn: "Temperature Sensor LM35",
    emoji: "🌡️",
    category: "かんきょう",
    color: "#FFCCBC",
    description: "まわりのおんどをはかるセンサーです。アナログの数値でおんどがわかります。",
    howItWorks:
      "LM35は温度によって電圧が変化する素子です。10mV/℃の割合で電圧が変わります。Microbitのアナログ入力で読み取り、計算式でおんどに変換します。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → OUT\n3.3V → VCC\nGND → GND",
    sampleCode: `// おんどをはかって表示する
basic.forever(function () {
    let val = pins.analogReadPin(AnalogPin.P0)
    let temp = (val * 330) / 1023
    basic.showNumber(temp)
    basic.pause(1000)
})`,
    difficulty: 3,
    tags: ["おんど", "アナログ入力", "かんきょう"],
  },
  {
    id: 11,
    name: "DHT11 おんど・しつどセンサー",
    nameEn: "DHT11 Temperature & Humidity Sensor",
    emoji: "🌤️",
    category: "かんきょう",
    color: "#B2EBF2",
    description: "おんどとしつど（くうきのしめりぐあい）をいっしょにはかれるセンサーです。",
    howItWorks:
      "DHT11はデジタル通信でおんどとしつどのデータをおくります。Microbitのextension（拡張機能）を追加して使います。しつどは0〜100%、おんどは0〜50℃がはかれます。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → DATA\n3.3V → VCC\nGND → GND",
    sampleCode: `// ※拡張機能「DHT11_DHT22」が必要
// おんどとしつどを表示する
basic.forever(function () {
    dht11_dht22.queryData(DHTtype.DHT11, DigitalPin.P0, true)
    basic.showNumber(dht11_dht22.readData(dataType.temperature))
    basic.pause(2000)
})`,
    difficulty: 3,
    tags: ["おんど", "しつど", "デジタル入力", "かんきょう"],
  },
  {
    id: 12,
    name: "どじょう水分センサー",
    nameEn: "Soil Moisture Sensor",
    emoji: "🌱",
    category: "かんきょう",
    color: "#DCEDC8",
    description: "つちの中のしめりぐあいをはかるセンサーです。植物の水やりにつかえます。",
    howItWorks:
      "2本のきんぞくの棒がつちにさしてあります。しめっているほどでんきがながれやすくなり、数値がかわります。数値が大きいほどつちがかわいています。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S（アナログ）\n3.3V → VCC\nGND → GND",
    sampleCode: `// つちのしめりをはかる
basic.forever(function () {
    let shimerime = pins.analogReadPin(AnalogPin.P0)
    if (shimerime < 300) {
        basic.showIcon(IconNames.Umbrella)   // みず！
    } else {
        basic.showIcon(IconNames.Happy)      // だいじょうぶ
    }
    basic.pause(1000)
})`,
    difficulty: 2,
    tags: ["みず", "アナログ入力", "かんきょう"],
  },
  {
    id: 13,
    name: "水位センサー",
    nameEn: "Water Level Sensor",
    emoji: "💧",
    category: "かんきょう",
    color: "#B3E5FC",
    description: "みずのたかさ（水位）をはかるセンサーです。みずがどのくらいあるかわかります。",
    howItWorks:
      "センサーの基板には細いきんぞくのラインがならんでいます。みずにつかる部分がおおくなるほど、でんきがながれやすくなり数値がかわります。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S（アナログ）\n3.3V → VCC\nGND → GND",
    sampleCode: `// 水位を表示する
basic.forever(function () {
    let suii = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(Math.map(suii, 0, 1023, 0, 100))
    basic.pause(500)
})`,
    difficulty: 2,
    tags: ["みず", "アナログ入力", "かんきょう"],
  },
  {
    id: 14,
    name: "ほのおセンサー",
    nameEn: "Flame Sensor",
    emoji: "🔥",
    category: "かんきょう",
    color: "#FFCCBC",
    description: "ひのほのおをかんちするセンサーです。ライターやキャンドルのほのおをかんちできます。",
    howItWorks:
      "ほのおが出す赤外線（目に見えないひかり）をかんちします。ほのおがちかくにあると数値がかわります。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S（アナログ）\n3.3V → VCC\nGND → GND",
    sampleCode: `// ほのおをかんちしたらアラート
basic.forever(function () {
    let honoo = pins.analogReadPin(AnalogPin.P0)
    if (honoo < 300) {
        basic.showIcon(IconNames.Skull)
        music.playTone(880, 200)
    } else {
        basic.clearScreen()
    }
})`,
    difficulty: 2,
    tags: ["ほのお", "アナログ入力", "かんきょう", "あんぜん"],
  },
  {
    id: 15,
    name: "しょうがいぶつかいひセンサー",
    nameEn: "Obstacle Avoidance Sensor",
    emoji: "🚧",
    category: "うごき",
    color: "#F8BBD9",
    description: "まえにものがあるかどうかをかんちするセンサーです。ロボットのめとして使えます。",
    howItWorks:
      "赤外線（せきがいせん）をはなって、はね返ってきた赤外線をかんちします。ものがあるとはね返りがあるのでかんちできます。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → OUT\n3.3V → VCC\nGND → GND",
    sampleCode: `// しょうがいぶつをかんちする
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showIcon(IconNames.No)   // もあり！
    } else {
        basic.showIcon(IconNames.Yes)  // なし
    }
})`,
    difficulty: 2,
    tags: ["せきがいせん", "デジタル入力", "うごき"],
  },
  {
    id: 16,
    name: "ラインセンサー",
    nameEn: "Line Tracking Sensor",
    emoji: "↔️",
    category: "うごき",
    color: "#D1C4E9",
    description: "黒いラインをかんちするセンサーです。ライントレースカーに使います。",
    howItWorks:
      "赤外線をはなって、はね返る量でいろを判断します。黒いところは赤外線を吸収するので、はね返りが少なくなります。白いところははね返りが多いです。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → OUT\n3.3V → VCC\nGND → GND",
    sampleCode: `// くろいラインをかんちする
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showArrow(ArrowNames.North) // ライン上
    } else {
        basic.showArrow(ArrowNames.South) // ライン外
    }
})`,
    difficulty: 2,
    tags: ["ライン", "デジタル入力", "うごき"],
  },
  {
    id: 17,
    name: "じんかんセンサー（PIR）",
    nameEn: "PIR Motion Sensor",
    emoji: "🚶",
    category: "うごき",
    color: "#E8F5E9",
    description: "にんげんやどうぶつが近くにいるかをかんちするセンサーです。自動ドアにも使われています。",
    howItWorks:
      "にんげんのからだからは赤外線（ねつ）が出ています。このセンサーはその赤外線のへんかをかんちします。うごいたときにだけはんのうします。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → OUT\n3.3V → VCC\nGND → GND",
    sampleCode: `// じんかんをかんちする
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showIcon(IconNames.Surprised)
        basic.pause(2000)
    } else {
        basic.clearScreen()
    }
})`,
    difficulty: 2,
    tags: ["じんかん", "デジタル入力", "うごき"],
  },
  {
    id: 18,
    name: "ちょうおんぱきょりセンサー",
    nameEn: "Ultrasonic Distance Sensor (HC-SR04)",
    emoji: "📡",
    category: "うごき",
    color: "#E0F7FA",
    description: "ものまでのきょりをはかるセンサーです。こうもりと同じしくみで超音波をつかいます。",
    howItWorks:
      "「Trig」から超音波（ちょうおんぱ）をはなって、ものにはね返ってきた超音波が「Echo」にとどくまでの時間をはかります。音のはやさから距離を計算します。",
    pins: { trig: "P0", echo: "P1", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → Trig\nP1 → Echo\n3.3V → VCC\nGND → GND",
    sampleCode: `// ※拡張機能「sonar」が必要
// きょりをはかる
basic.forever(function () {
    let dist = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters)
    basic.showNumber(dist)
    basic.pause(500)
})`,
    difficulty: 3,
    tags: ["きょり", "ちょうおんぱ", "うごき"],
  },
  {
    id: 19,
    name: "パッシブブザー",
    nameEn: "Passive Buzzer Module",
    emoji: "🔔",
    category: "おと",
    color: "#FFF3E0",
    description: "いろいろなおとやメロディーを鳴らせるブザーです。音の高さをプログラムでかえられます。",
    howItWorks:
      "パッシブブザーはそれ自体では音を出せません。プログラムで音の高さ（周波数）のでんきをおくることで、その通りの音が出ます。いろんなメロディーが作れます。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S（シグナル）\n3.3V → VCC\nGND → GND",
    sampleCode: `// ドレミをならす
let notes = [262, 294, 330, 349, 392, 440, 494, 523]
for (let i = 0; i < notes.length; i++) {
    music.ringTone(notes[i])
    basic.pause(400)
}
music.stopAllSounds()`,
    difficulty: 2,
    tags: ["おと", "ブザー", "アナログ出力"],
  },
  {
    id: 20,
    name: "アクティブブザー",
    nameEn: "Active Buzzer Module",
    emoji: "📢",
    category: "おと",
    color: "#FBE9E7",
    description: "でんきをながすだけで「ピー」っとおとがなるブザーです。かんたんに使えます。",
    howItWorks:
      "アクティブブザーはでんきをながすだけで決まった音が出ます。HIGH（1）を送るとなり、LOW（0）を送るとやみます。音の高さはかえられません。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S\n3.3V → VCC\nGND → GND",
    sampleCode: `// ボタンAでブザーをならす
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P0, 0)
})`,
    difficulty: 1,
    tags: ["おと", "ブザー", "デジタル出力"],
  },
  {
    id: 21,
    name: "サーボモーター",
    nameEn: "Servo Motor",
    emoji: "⚙️",
    category: "うごかす",
    color: "#E8EAF6",
    description: "かくど（0〜180度）を指定して、せいかくにかいてんさせられるモーターです。",
    howItWorks:
      "サーボモーターはプログラムで「何度まわして」と指定できます。ロボットのうで・あし・カメラのむきなどに使われます。PWM（パルス信号）でかくどを指定します。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → オレンジ（シグナル）\n3.3V → あか（VCC）\nGND → ちゃいろ（GND）",
    sampleCode: `// サーボモーターをうごかす
pins.servoWritePin(AnalogPin.P0, 0)   // 0度
basic.pause(1000)
pins.servoWritePin(AnalogPin.P0, 90)  // 90度
basic.pause(1000)
pins.servoWritePin(AnalogPin.P0, 180) // 180度
basic.pause(1000)`,
    difficulty: 2,
    tags: ["モーター", "サーボ", "うごかす"],
  },
  {
    id: 22,
    name: "ファンモジュール",
    nameEen: "Fan Module (130 Motor)",
    emoji: "🌀",
    category: "うごかす",
    color: "#E0F7FA",
    description: "小さなファン（羽根）がついたモジュールです。プログラムで回転させられます。",
    howItWorks:
      "DCモーターというモーターを使っています。でんきをながすとじしゃく（磁石）のちからでじくがまわります。ファンの羽根をつけると風がふきます。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S\n3.3V → VCC\nGND → GND",
    sampleCode: `// ボタンAでファンをまわす
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1) // ファンON
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0) // ファンOFF
})`,
    difficulty: 2,
    tags: ["モーター", "ファン", "うごかす"],
  },
  {
    id: 23,
    name: "リレーモジュール",
    nameEn: "Relay Module",
    emoji: "🔌",
    category: "うごかす",
    color: "#F3E5F5",
    description: "大きなでんきをON/OFFするスイッチです。Microbitの小さなでんきで大きなでんきを制御できます。",
    howItWorks:
      "リレーは「でんきのスイッチ」です。Microbitからのひよわなでんきで「コイル」をはたらかせ、じしゃくのちからでもっとおおきなスイッチをON/OFFします。",
    pins: { signal: "P0", vcc: "5V", gnd: "GND" },
    wiring: "P0 → S（シグナル）\n5V → VCC\nGND → GND",
    sampleCode: `// リレーをON/OFFする
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1) // リレーON
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0) // リレーOFF
    basic.pause(2000)
})`,
    difficulty: 3,
    tags: ["リレー", "デジタル出力", "うごかす"],
  },
  {
    id: 24,
    name: "7セグメントディスプレイ",
    nameEn: "7-Segment Display",
    emoji: "🔢",
    category: "ひょうじ",
    color: "#FAFAFA",
    description: "0〜9の数字や文字をひかって表示できるディスプレイです。時計やスコアの表示に使います。",
    howItWorks:
      "7本のLEDの棒を「8の字」のようにならべています。どのLEDをひからせるかによって、ちがう数字や文字が表示できます。",
    pins: { data: "P0", clock: "P1", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → DIO（データ）\nP1 → CLK（クロック）\n3.3V → VCC\nGND → GND",
    sampleCode: `// ※拡張機能「TM1637」が必要
// 1234を表示する
TM1637.setup(DigitalPin.P1, DigitalPin.P0)
TM1637.showNumber(1234)`,
    difficulty: 3,
    tags: ["ディスプレイ", "すうじ", "ひょうじ"],
  },
  {
    id: 25,
    name: "ジョイスティックモジュール",
    nameEn: "Joystick Module",
    emoji: "🕹️",
    category: "にゅうりょく",
    color: "#EFEBE9",
    description: "ゲームのコントローラーのようなスティックです。上下左右の入力ができます。",
    howItWorks:
      "2つのポテンショメーター（かわるていこう）がXじくとYじくにつながっています。スティックをうごかすとそれぞれの数値がかわります。",
    pins: { x: "P0", y: "P1", button: "P2", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → VRx（よこ）\nP1 → VRy（たて）\nP2 → SW（ボタン）\n3.3V → VCC\nGND → GND",
    sampleCode: `// ジョイスティックの値を表示する
basic.forever(function () {
    let x = pins.analogReadPin(AnalogPin.P0)
    let y = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(x)
    basic.pause(500)
})`,
    difficulty: 3,
    tags: ["ジョイスティック", "アナログ入力", "にゅうりょく"],
  },
  {
    id: 26,
    name: "ポテンショメーター",
    nameEn: "Potentiometer Module",
    emoji: "🎛️",
    category: "にゅうりょく",
    color: "#E8F5E9",
    description: "つまみをまわすと数値がかわるセンサーです。音量つまみとにています。",
    howItWorks:
      "ポテンショメーターはていこう（抵抗）がかわる部品です。つまみをまわすとでんきのながれかたがかわります。0〜1023のアナログ数値がよめます。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S（アナログ）\n3.3V → VCC\nGND → GND",
    sampleCode: `// つまみの値でLEDのあかるさをかえる
basic.forever(function () {
    let val = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, val)
    basic.pause(50)
})`,
    difficulty: 2,
    tags: ["つまみ", "アナログ入力", "にゅうりょく"],
  },
  {
    id: 27,
    name: "赤外線じゅしんモジュール",
    nameEn: "IR Receiver Module",
    emoji: "📻",
    category: "つうしん",
    color: "#EDE7F6",
    description: "テレビのリモコンのような赤外線のしんごうをうけとるモジュールです。",
    howItWorks:
      "赤外線は目には見えないひかりです。リモコンはこの赤外線をてんめつさせてデータをおくります。じゅしんモジュールはその赤外線のてんめつパターンをよみとります。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → OUT\n3.3V → VCC\nGND → GND",
    sampleCode: `// ※拡張機能「infrared」が必要
// リモコンのしんごうをよみとる
infrared.onReceived(function (key) {
    basic.showNumber(key)
})`,
    difficulty: 3,
    tags: ["赤外線", "リモコン", "つうしん"],
  },
  {
    id: 28,
    name: "リードスイッチ",
    nameEn: "Reed Switch Sensor",
    emoji: "🧲",
    category: "にゅうりょく",
    color: "#E3F2FD",
    description: "じしゃく（磁石）が近づくとONになるスイッチです。ドアの開閉かんちにも使われます。",
    howItWorks:
      "ガラスの中に2まいのきんぞくのはねがはいっています。じしゃくを近づけると、はねがじりょくでひっついてでんきがながれます。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S\n3.3V → VCC\nGND → GND",
    sampleCode: `// じしゃくがちかづいたら表示する
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})`,
    difficulty: 1,
    tags: ["じしゃく", "デジタル入力", "にゅうりょく"],
  },
  {
    id: 29,
    name: "レーザーモジュール",
    nameEn: "Laser Module",
    emoji: "🔴",
    category: "ひかり",
    color: "#FFEBEE",
    description: "赤いレーザーのひかりをだすモジュールです。直線のビームがでます。",
    howItWorks:
      "レーザーダイオードという部品がはいっています。でんきをながすと細いレーザー光が出ます。目にあてると危険なので、あんぜんにつかいましょう。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → S\n3.3V → VCC\nGND → GND",
    sampleCode: `// ボタンAでレーザーをてんめつさせる
input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < 5; i++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(200)
    }
})`,
    difficulty: 2,
    tags: ["レーザー", "デジタル出力", "ひかり"],
  },
  {
    id: 30,
    name: "すいぶんセンサー（あめ）",
    nameEen: "Rain/Water Detection Sensor",
    emoji: "🌧️",
    category: "かんきょう",
    color: "#E1F5FE",
    description: "みずのつぶやあめをかんちするセンサーです。みずがかかると数値がかわります。",
    howItWorks:
      "センサーの基板にならんだきんぞくのラインにみずがかかると、でんきがながれます。みずはでんきをながしやすいせいしつがあります。",
    pins: { signal: "P0", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → A0（アナログ）\n3.3V → VCC\nGND → GND",
    sampleCode: `// あめをかんちする
basic.forever(function () {
    let ame = pins.analogReadPin(AnalogPin.P0)
    if (ame > 500) {
        basic.showIcon(IconNames.Umbrella)
    } else {
        basic.showIcon(IconNames.Sun)
    }
    basic.pause(500)
})`,
    difficulty: 2,
    tags: ["あめ", "みず", "アナログ入力", "かんきょう"],
  },
  {
    id: 31,
    name: "けむりセンサー（MQ-2）",
    nameEn: "Smoke/Gas Sensor MQ-2",
    emoji: "💨",
    category: "かんきょう",
    color: "#EEEEEE",
    description: "けむりやガスをかんちするセンサーです。かじのかんちにつかわれます。",
    howItWorks:
      "センサーの中に加熱された金属酸化物がはいっています。けむりやガスがあたると、ていこうがかわり、数値がかわります。すこしじかんがかかりますが正確にかんちできます。",
    pins: { signal: "P0", vcc: "5V", gnd: "GND" },
    wiring: "P0 → A0（アナログ）\n5V → VCC\nGND → GND",
    sampleCode: `// けむりをかんちしたらアラーム
basic.forever(function () {
    let kemuri = pins.analogReadPin(AnalogPin.P0)
    if (kemuri > 400) {
        basic.showIcon(IconNames.Skull)
        music.playTone(880, 500)
    } else {
        basic.clearScreen()
    }
    basic.pause(500)
})`,
    difficulty: 3,
    tags: ["けむり", "ガス", "アナログ入力", "かんきょう", "あんぜん"],
  },
  {
    id: 32,
    name: "マジックライトカップ",
    nameEn: "Magic Light Cup",
    emoji: "🪄",
    category: "ひかり",
    color: "#FCE4EC",
    description: "かたむけるとLEDのひかりがうつるような、ふしぎなうごきをするモジュールです。",
    howItWorks:
      "かたむきセンサー（水銀スイッチ）とLEDがくみあわさっています。かたむきにあわせてLEDのあかるさがかわります。みずがうつるようにみえます。",
    pins: { tilt: "P0", led: "P1", vcc: "3.3V", gnd: "GND" },
    wiring: "P0 → かたむきセンサー\nP1 → LED\n3.3V → VCC\nGND → GND",
    sampleCode: `// かたむけるとひかりがうつる
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.analogWritePin(AnalogPin.P1, 1023)
    } else {
        pins.analogWritePin(AnalogPin.P1, 0)
    }
})`,
    difficulty: 2,
    tags: ["かたむき", "LED", "マジック"],
  },
  {
    id: 33,
    name: "ステッピングモーター",
    nameEen: "Stepper Motor Module",
    emoji: "🔩",
    category: "うごかす",
    color: "#ECEFF1",
    description: "1ステップずつせいかくにまわせるモーターです。3Dプリンターやロボットにつかわれます。",
    howItWorks:
      "ステッピングモーターは決まったかくどずつまわります。たとえば1ステップが1.8度のモーターは、200ステップで1周します。プログラムでせいかくにかいてんできます。",
    pins: { in1: "P0", in2: "P1", in3: "P2", in4: "P8", vcc: "5V", gnd: "GND" },
    wiring: "P0 → IN1\nP1 → IN2\nP2 → IN3\nP8 → IN4\n5V → VCC\nGND → GND",
    sampleCode: `// ※ステッピングモーター用の拡張機能が必要
// 1周まわす
stepper.step(200, 0)`,
    difficulty: 4,
    tags: ["モーター", "ステッピング", "うごかす"],
  },
  {
    id: 34,
    name: "タッチキーパッド",
    nameEn: "Touch Keypad",
    emoji: "⌨️",
    category: "にゅうりょく",
    color: "#E8EAF6",
    description: "0〜9の数字などをタッチして入力できるキーパッドです。",
    howItWorks:
      "各キーにタッチセンサーがついています。I2Cという通信方法でMicrobitとやりとりします。",
    pins: { sda: "P20", scl: "P19", vcc: "3.3V", gnd: "GND" },
    wiring: "P20 → SDA\nP19 → SCL\n3.3V → VCC\nGND → GND",
    sampleCode: `// ※拡張機能「keypad」が必要
// キーが押されたら表示する
keypad.onKeyPress(function (key) {
    basic.showString(key)
})`,
    difficulty: 4,
    tags: ["キーパッド", "I2C", "にゅうりょく"],
  },
  {
    id: 35,
    name: "I2C LCDディスプレイ",
    nameEn: "I2C LCD 1602",
    emoji: "📟",
    category: "ひょうじ",
    color: "#E0F2F1",
    description: "文字を表示できる液晶ディスプレイです。2行×16文字が表示できます。",
    howItWorks:
      "液晶（リキッドクリスタル）ディスプレイです。I2Cという通信で、たった2本の線でデータをやりとりします。センサーの値を文字で表示するのに便利です。",
    pins: { sda: "P20", scl: "P19", vcc: "5V", gnd: "GND" },
    wiring: "P20 → SDA\nP19 → SCL\n5V → VCC\nGND → GND",
    sampleCode: `// ※拡張機能「I2C LCD1602」が必要
// 文字を表示する
i2cLCD1602.init(39)
i2cLCD1602.ShowString("Hello!", 0, 0)
i2cLCD1602.ShowString("Microbit!", 1, 0)`,
    difficulty: 3,
    tags: ["LCD", "ディスプレイ", "I2C", "ひょうじ"],
  },
  {
    id: 36,
    name: "RFIDモジュール",
    nameEn: "RFID Module",
    emoji: "📛",
    category: "つうしん",
    color: "#E8EAF6",
    description: "ICカードやタグをかざすと読み取りができるモジュールです。図書館のカードにも使われています。",
    howItWorks:
      "RFID（無線ICタグ）は電波でデータをやりとりします。カードには小さなアンテナとICチップがはいっていて、センサーにかざすだけで識別番号がよみとれます。",
    pins: { sda: "P20", scl: "P19", vcc: "3.3V", gnd: "GND" },
    wiring: "SPI通信を使用。接続は付属のマニュアルを確認してください。",
    sampleCode: `// ※拡張機能「RFID」が必要
// ICカードを読み取る
RFID.onCardDetected(function (id) {
    basic.showNumber(id)
})`,
    difficulty: 4,
    tags: ["RFID", "ICカード", "つうしん"],
  },
  {
    id: 37,
    name: "3しょくLED（表面実装）",
    nameEen: "3-Color SMD LED",
    emoji: "🔴🟢🔵",
    category: "ひかり",
    color: "#F3E5F5",
    description: "あか・みどり・あおの3つのLEDがひとつのパッケージになっています。",
    howItWorks:
      "3つのLEDが1つの部品にまとまっています。それぞれのアノード（プラス側）をちがうPINにつなぐことで、3色をバラバラにひからせたり、まぜたりできます。",
    pins: { red: "P0", green: "P1", blue: "P2", gnd: "GND" },
    wiring: "P0 → あか（R）\nP1 → みどり（G）\nP2 → あお（B）\nGND → GND",
    sampleCode: `// 3しょくをじゅんばんにひからせる
let colors = [
    [1, 0, 0],  // あか
    [0, 1, 0],  // みどり
    [0, 0, 1],  // あお
]
basic.forever(function () {
    for (let c of colors) {
        pins.digitalWritePin(DigitalPin.P0, c[0])
        pins.digitalWritePin(DigitalPin.P1, c[1])
        pins.digitalWritePin(DigitalPin.P2, c[2])
        basic.pause(500)
    }
})`,
    difficulty: 2,
    tags: ["LED", "3しょく", "デジタル出力", "ひかり"],
  },
];

export const categories = [
  { id: "all", name: "すべて", emoji: "📦" },
  { id: "ひかり", name: "ひかり", emoji: "💡" },
  { id: "おと", name: "おと", emoji: "🔔" },
  { id: "うごき", name: "うごき・かんち", emoji: "📡" },
  { id: "かんきょう", name: "かんきょう", emoji: "🌡️" },
  { id: "にゅうりょく", name: "にゅうりょく", emoji: "👆" },
  { id: "うごかす", name: "うごかす", emoji: "⚙️" },
  { id: "ひょうじ", name: "ひょうじ", emoji: "📟" },
  { id: "つうしん", name: "つうしん", emoji: "📻" },
];
