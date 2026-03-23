/* =====================================================
   回路のきほん — 各レッスン用 SVG ダイアグラム
   ===================================================== */

/** レッスン1: でんきとは（水の流れのたとえ） */
export function DiagramElectricity() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="circuit-svg">
      {/* 水タンク（でんち） */}
      <rect x="20" y="60" width="60" height="80" rx="8" fill="#FFEB3B" stroke="#F9A825" strokeWidth="2"/>
      <text x="50" y="90" textAnchor="middle" fontSize="11" fill="#333">でんち</text>
      <text x="50" y="108" textAnchor="middle" fontSize="10" fill="#666">（ポンプ）</text>
      <text x="50" y="124" textAnchor="middle" fontSize="12" fill="#E65100">1.5V</text>

      {/* 上の管（プラス側） */}
      <line x1="80" y1="80" x2="200" y2="80" stroke="#E53935" strokeWidth="4"/>
      {/* 矢印 */}
      <polygon points="190,73 210,80 190,87" fill="#E53935"/>
      <text x="140" y="70" textAnchor="middle" fontSize="10" fill="#E53935">+ でんりゅう →</text>

      {/* 電球 */}
      <circle cx="250" cy="100" r="28" fill="#FFF9C4" stroke="#FBC02D" strokeWidth="2"/>
      <text x="250" y="96" textAnchor="middle" fontSize="18">💡</text>
      <text x="250" y="116" textAnchor="middle" fontSize="9" fill="#333">でんとう</text>

      {/* 下の管（マイナス側） */}
      <line x1="80" y1="120" x2="222" y2="120" stroke="#1E88E5" strokeWidth="4"/>
      {/* 矢印（逆） */}
      <polygon points="90,113 70,120 90,127" fill="#1E88E5"/>
      <text x="140" y="142" textAnchor="middle" fontSize="10" fill="#1E88E5">← − もどる</text>

      {/* 右の管（縦） */}
      <line x1="278" y1="80" x2="370" y2="80" stroke="#E53935" strokeWidth="4"/>
      <line x1="370" y1="80" x2="370" y2="120" stroke="#9E9E9E" strokeWidth="4"/>
      <line x1="278" y1="120" x2="370" y2="120" stroke="#1E88E5" strokeWidth="4"/>

      {/* ラベル */}
      <text x="50" y="165" textAnchor="middle" fontSize="10" fill="#F57F17">でんあつ=ポンプのちから</text>
      <text x="200" y="185" textAnchor="middle" fontSize="10" fill="#555">でんりゅう=ながれる水のりょう</text>
    </svg>
  );
}

/** レッスン2: かいろとは（基本回路） */
export function DiagramCircuit() {
  return (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="circuit-svg">
      {/* === 閉じた回路 === */}
      <text x="130" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2E7D32">✅ つながった回路</text>

      {/* 配線（四角形） */}
      <rect x="20" y="30" width="220" height="120" rx="0" fill="none" stroke="#888" strokeWidth="1" strokeDasharray="4"/>

      {/* でんち */}
      <rect x="30" y="60" width="44" height="60" rx="6" fill="#FFEB3B" stroke="#F9A825" strokeWidth="2"/>
      <text x="52" y="84" textAnchor="middle" fontSize="10" fill="#333">でんち</text>
      <text x="52" y="98" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#E65100">+  −</text>
      <text x="52" y="112" textAnchor="middle" fontSize="9" fill="#666">3V</text>

      {/* 上の線 */}
      <line x1="74" y1="70" x2="230" y2="70" stroke="#E53935" strokeWidth="3"/>
      {/* 右の線 */}
      <line x1="230" y1="70" x2="230" y2="130" stroke="#E53935" strokeWidth="3"/>
      {/* 下の線 */}
      <line x1="74" y1="130" x2="230" y2="130" stroke="#1565C0" strokeWidth="3"/>

      {/* ていこう (上) */}
      <rect x="120" y="55" width="50" height="22" rx="4" fill="#FF7043" stroke="#BF360C" strokeWidth="1.5"/>
      <text x="145" y="70" textAnchor="middle" fontSize="10" fill="white">ていこう</text>

      {/* LED（右縦線の中間） */}
      <circle cx="230" cy="100" r="14" fill="#FFF9C4" stroke="#FBC02D" strokeWidth="2"/>
      <text x="230" y="105" textAnchor="middle" fontSize="14">💡</text>

      {/* 矢印 */}
      <polygon points="170,63 185,70 170,77" fill="#E53935"/>
      <text x="85" y="48" fontSize="10" fill="#E53935">→ でんりゅう</text>

      {/* === 切れた回路 === */}
      <text x="330" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#C62828">❌ きれた回路</text>

      <rect x="270" y="60" width="44" height="60" rx="6" fill="#FFEB3B" stroke="#F9A825" strokeWidth="2"/>
      <text x="292" y="84" textAnchor="middle" fontSize="10" fill="#333">でんち</text>
      <text x="292" y="98" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#E65100">+  −</text>

      {/* 上の線（途中で切れ） */}
      <line x1="314" y1="70" x2="340" y2="70" stroke="#E53935" strokeWidth="3"/>
      <line x1="360" y1="70" x2="380" y2="70" stroke="#E53935" strokeWidth="3"/>
      {/* 切断マーク */}
      <text x="350" y="68" textAnchor="middle" fontSize="16" fill="#C62828">✂</text>

      <line x1="380" y1="70" x2="380" y2="130" stroke="#999" strokeWidth="3" strokeDasharray="5"/>
      <line x1="314" y1="130" x2="380" y2="130" stroke="#1565C0" strokeWidth="3"/>

      {/* 暗いLED */}
      <circle cx="380" cy="100" r="14" fill="#EEE" stroke="#CCC" strokeWidth="2"/>
      <text x="380" y="105" textAnchor="middle" fontSize="14">🔦</text>
      <text x="330" y="185" textAnchor="middle" fontSize="10" fill="#C62828">つながっていない→でんきが流れない</text>
      <text x="130" y="185" textAnchor="middle" fontSize="10" fill="#2E7D32">ぐるっとつながる→でんきが流れる</text>
    </svg>
  );
}

/** レッスン3: 直列・並列 */
export function DiagramSeriesParallel() {
  return (
    <svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" className="circuit-svg">
      {/* === 直列 === */}
      <text x="100" y="18" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1565C0">直列（ちょくれつ）</text>
      {/* でんち */}
      <rect x="10" y="40" width="36" height="70" rx="5" fill="#FFEB3B" stroke="#F9A825" strokeWidth="2"/>
      <text x="28" y="62" textAnchor="middle" fontSize="9" fill="#333">でんち</text>
      <text x="28" y="76" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#E65100">+</text>
      <text x="28" y="102" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1565C0">−</text>
      {/* 配線（一本の道） */}
      <line x1="46" y1="55" x2="190" y2="55" stroke="#E53935" strokeWidth="3"/>
      <line x1="190" y1="55" x2="190" y2="105" stroke="#777" strokeWidth="3"/>
      <line x1="46" y1="105" x2="190" y2="105" stroke="#1565C0" strokeWidth="3"/>
      {/* LED1 */}
      <circle cx="90" cy="55" r="13" fill="#FFF9C4" stroke="#FBC02D" strokeWidth="2"/>
      <text x="90" y="60" textAnchor="middle" fontSize="12">💡</text>
      <text x="90" y="40" textAnchor="middle" fontSize="9" fill="#333">LED①</text>
      {/* LED2 */}
      <circle cx="145" cy="55" r="13" fill="#FFF9C4" stroke="#FBC02D" strokeWidth="2"/>
      <text x="145" y="60" textAnchor="middle" fontSize="12">💡</text>
      <text x="145" y="40" textAnchor="middle" fontSize="9" fill="#333">LED②</text>
      {/* 説明 */}
      <text x="100" y="130" textAnchor="middle" fontSize="9" fill="#C62828">1つきれると → 全部きえる</text>
      <text x="100" y="145" textAnchor="middle" fontSize="9" fill="#1565C0">でんあつはわかれる</text>

      {/* === 並列 === */}
      <text x="310" y="18" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2E7D32">並列（へいれつ）</text>
      {/* でんち */}
      <rect x="210" y="40" width="36" height="130" rx="5" fill="#FFEB3B" stroke="#F9A825" strokeWidth="2"/>
      <text x="228" y="65" textAnchor="middle" fontSize="9" fill="#333">でんち</text>
      <text x="228" y="80" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#E65100">+</text>
      <text x="228" y="162" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1565C0">−</text>
      {/* プラス幹線 */}
      <line x1="246" y1="55" x2="390" y2="55" stroke="#E53935" strokeWidth="3"/>
      {/* マイナス幹線 */}
      <line x1="246" y1="170" x2="390" y2="170" stroke="#1565C0" strokeWidth="3"/>
      {/* LED1 （並列1本目） */}
      <line x1="295" y1="55" x2="295" y2="90" stroke="#777" strokeWidth="2"/>
      <circle cx="295" cy="103" r="13" fill="#FFF9C4" stroke="#FBC02D" strokeWidth="2"/>
      <text x="295" y="108" textAnchor="middle" fontSize="12">💡</text>
      <text x="295" y="85" textAnchor="middle" fontSize="9" fill="#333">①</text>
      <line x1="295" y1="116" x2="295" y2="170" stroke="#777" strokeWidth="2"/>
      {/* LED2 （並列2本目） */}
      <line x1="355" y1="55" x2="355" y2="90" stroke="#777" strokeWidth="2"/>
      <circle cx="355" cy="103" r="13" fill="#FFF9C4" stroke="#FBC02D" strokeWidth="2"/>
      <text x="355" y="108" textAnchor="middle" fontSize="12">💡</text>
      <text x="355" y="85" textAnchor="middle" fontSize="9" fill="#333">②</text>
      <line x1="355" y1="116" x2="355" y2="170" stroke="#777" strokeWidth="2"/>
      {/* 説明 */}
      <text x="310" y="195" textAnchor="middle" fontSize="9" fill="#2E7D32">1つきれてものこりはひかる</text>
      <text x="310" y="210" textAnchor="middle" fontSize="9" fill="#2E7D32">でんあつは同じ</text>
    </svg>
  );
}

/** レッスン4: オームの法則 */
export function DiagramOhmsLaw() {
  return (
    <svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" className="circuit-svg">
      {/* 三角形（VIR三角） */}
      <polygon points="200,20 110,140 290,140" fill="#E3F2FD" stroke="#1565C0" strokeWidth="2"/>
      {/* V */}
      <circle cx="200" cy="20" r="22" fill="#1565C0"/>
      <text x="200" y="27" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">V</text>
      <text x="200" y="52" textAnchor="middle" fontSize="10" fill="#1565C0">でんあつ</text>
      <text x="200" y="64" textAnchor="middle" fontSize="9" fill="#666">（ボルト）</text>
      {/* I */}
      <circle cx="120" cy="148" r="22" fill="#2E7D32"/>
      <text x="120" y="155" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">I</text>
      <text x="120" y="178" textAnchor="middle" fontSize="10" fill="#2E7D32">でんりゅう</text>
      <text x="120" y="190" textAnchor="middle" fontSize="9" fill="#666">（アンペア）</text>
      {/* R */}
      <circle cx="280" cy="148" r="22" fill="#C62828"/>
      <text x="280" y="155" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">R</text>
      <text x="280" y="178" textAnchor="middle" fontSize="10" fill="#C62828">ていこう</text>
      <text x="280" y="190" textAnchor="middle" fontSize="9" fill="#666">（オーム）</text>
      {/* 横線（I と R を分ける） */}
      <line x1="110" y1="140" x2="290" y2="140" stroke="#1565C0" strokeWidth="2"/>
      {/* 式 */}
      <text x="200" y="105" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1565C0">V = I × R</text>
      {/* 計算例 */}
      <rect x="10" y="10" width="90" height="75" rx="8" fill="#FFF3E0" stroke="#FF6F00" strokeWidth="1.5"/>
      <text x="55" y="28" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#E65100">計算れい</text>
      <text x="55" y="44" textAnchor="middle" fontSize="9" fill="#333">V = 3V</text>
      <text x="55" y="58" textAnchor="middle" fontSize="9" fill="#333">R = 100Ω</text>
      <line x1="20" y1="63" x2="90" y2="63" stroke="#FF6F00" strokeWidth="1"/>
      <text x="55" y="76" textAnchor="middle" fontSize="9" fill="#E65100">I = 0.03A (30mA)</text>

      <rect x="300" y="10" width="90" height="75" rx="8" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="1.5"/>
      <text x="345" y="28" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7B1FA2">おぼえ方</text>
      <text x="345" y="44" textAnchor="middle" fontSize="9" fill="#333">V ÷ R = I</text>
      <text x="345" y="58" textAnchor="middle" fontSize="9" fill="#333">V ÷ I = R</text>
      <text x="345" y="72" textAnchor="middle" fontSize="9" fill="#333">I × R = V</text>
    </svg>
  );
}

/** レッスン5: デジタルとアナログ */
export function DiagramDigitalAnalog() {
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="circuit-svg">
      {/* デジタル */}
      <text x="100" y="18" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1565C0">デジタル</text>
      <text x="100" y="32" textAnchor="middle" fontSize="9" fill="#666">ON (1) か OFF (0) だけ</text>
      {/* 軸 */}
      <line x1="15" y1="130" x2="195" y2="130" stroke="#CCC" strokeWidth="1"/>
      <line x1="15" y1="60" x2="15" y2="135" stroke="#CCC" strokeWidth="1"/>
      <text x="8" y="65" textAnchor="middle" fontSize="9" fill="#1565C0">1</text>
      <text x="8" y="132" textAnchor="middle" fontSize="9" fill="#1565C0">0</text>
      {/* 矩形波 */}
      <polyline
        points="15,130 15,65 50,65 50,130 90,130 90,65 130,65 130,130 170,130 170,65 195,65"
        fill="none" stroke="#1565C0" strokeWidth="3" strokeLinejoin="round"/>
      {/* ON/OFF ラベル */}
      <text x="32" y="82" textAnchor="middle" fontSize="8" fill="#1565C0">ON</text>
      <text x="70" y="122" textAnchor="middle" fontSize="8" fill="#9E9E9E">OFF</text>
      <text x="110" y="82" textAnchor="middle" fontSize="8" fill="#1565C0">ON</text>
      {/* 例 */}
      <text x="100" y="158" textAnchor="middle" fontSize="9" fill="#333">例：ボタン、スイッチ</text>
      <text x="100" y="172" textAnchor="middle" fontSize="9" fill="#333">LED（つける/けす）</text>

      {/* アナログ */}
      <text x="310" y="18" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#C62828">アナログ</text>
      <text x="310" y="32" textAnchor="middle" fontSize="9" fill="#666">0〜1023 のこまかい数値</text>
      {/* 軸 */}
      <line x1="215" y1="130" x2="395" y2="130" stroke="#CCC" strokeWidth="1"/>
      <line x1="215" y1="55" x2="215" y2="135" stroke="#CCC" strokeWidth="1"/>
      <text x="207" y="60" textAnchor="middle" fontSize="7" fill="#C62828">1023</text>
      <text x="210" y="132" textAnchor="middle" fontSize="7" fill="#C62828">0</text>
      {/* サイン波 */}
      <path
        d="M215,92 C230,60 245,60 260,92 C275,124 290,124 305,92 C320,60 335,60 350,92 C365,124 380,124 395,92"
        fill="none" stroke="#C62828" strokeWidth="3"/>
      {/* 数値ラベル */}
      <text x="260" y="58" textAnchor="middle" fontSize="8" fill="#C62828">850</text>
      <text x="305" y="128" textAnchor="middle" fontSize="8" fill="#C62828">120</text>
      {/* 例 */}
      <text x="310" y="158" textAnchor="middle" fontSize="9" fill="#333">例：ひかり、おと、おんど</text>
      <text x="310" y="172" textAnchor="middle" fontSize="9" fill="#333">センサーの多くはアナログ</text>
    </svg>
  );
}

/** レッスン6: Microbitのピン */
export function DiagramMicrobitPins() {
  return (
    <svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" className="circuit-svg">
      {/* Microbit 本体 */}
      <rect x="80" y="15" width="240" height="140" rx="12" fill="#E3F2FD" stroke="#1565C0" strokeWidth="2.5"/>
      {/* LED マトリクス */}
      {[0,1,2,3,4].map(col => [0,1,2,3,4].map(row => (
        <circle key={`${col}-${row}`} cx={115 + col*18} cy={45 + row*14} r="4"
          fill={Math.random() > 0.5 ? "#E53935" : "#FFCDD2"} />
      )))}
      {/* ラベル */}
      <text x="200" y="32" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1565C0">Microbit</text>

      {/* ボタン A/B */}
      <rect x="88" y="80" width="20" height="20" rx="10" fill="#4CAF50" stroke="#2E7D32" strokeWidth="1.5"/>
      <text x="98" y="94" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">A</text>
      <rect x="292" y="80" width="20" height="20" rx="10" fill="#4CAF50" stroke="#2E7D32" strokeWidth="1.5"/>
      <text x="302" y="94" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">B</text>

      {/* ピン（下部） */}
      {/* P0 */}
      <rect x="110" y="150" width="28" height="18" rx="3" fill="#FF7043"/>
      <text x="124" y="163" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">P0</text>
      <line x1="124" y1="168" x2="124" y2="195" stroke="#FF7043" strokeWidth="2.5"/>
      <text x="124" y="206" textAnchor="middle" fontSize="8" fill="#E64A19">デジタル/アナログ</text>
      {/* P1 */}
      <rect x="152" y="150" width="28" height="18" rx="3" fill="#FF7043"/>
      <text x="166" y="163" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">P1</text>
      <line x1="166" y1="168" x2="166" y2="195" stroke="#FF7043" strokeWidth="2.5"/>
      {/* P2 */}
      <rect x="194" y="150" width="28" height="18" rx="3" fill="#FF7043"/>
      <text x="208" y="163" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">P2</text>
      <line x1="208" y1="168" x2="208" y2="195" stroke="#FF7043" strokeWidth="2.5"/>
      {/* 3V */}
      <rect x="236" y="150" width="28" height="18" rx="3" fill="#E53935"/>
      <text x="250" y="163" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">3V</text>
      <line x1="250" y1="168" x2="250" y2="195" stroke="#E53935" strokeWidth="2.5"/>
      <text x="250" y="206" textAnchor="middle" fontSize="8" fill="#B71C1C">電源(+)</text>
      {/* GND */}
      <rect x="278" y="150" width="30" height="18" rx="3" fill="#424242"/>
      <text x="293" y="163" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">GND</text>
      <line x1="293" y1="168" x2="293" y2="195" stroke="#424242" strokeWidth="2.5"/>
      <text x="293" y="206" textAnchor="middle" fontSize="8" fill="#212121">マイナス</text>

      {/* センサー接続説明（左） */}
      <rect x="2" y="30" width="70" height="78" rx="6" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="1.5"/>
      <text x="37" y="46" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#7B1FA2">センサー</text>
      <text x="37" y="60" textAnchor="middle" fontSize="9" fill="#E53935">VCC →</text>
      <text x="37" y="73" textAnchor="middle" fontSize="8" fill="#555">3Vへ</text>
      <text x="37" y="86" textAnchor="middle" fontSize="9" fill="#333">GND →</text>
      <text x="37" y="99" textAnchor="middle" fontSize="8" fill="#555">GNDへ</text>
      <text x="37" y="112" textAnchor="middle" fontSize="9" fill="#FF7043">S →</text>
      <text x="37" y="125" textAnchor="middle" fontSize="8" fill="#555">P0/P1/P2</text>
    </svg>
  );
}
