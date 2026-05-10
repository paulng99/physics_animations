/* =============================================================================
 * Practice Questions Data Bank
 * -----------------------------------------------------------------------------
 * 5 questions + worked solutions per demo, in English + Traditional Chinese
 * (Hong Kong). Loaded after practice_questions.js, then activated by each
 * demo page via initPracticeQuestions('<demo_key>').
 * ============================================================================= */
(function () {
  'use strict';
  const B = window.PRACTICE_QUESTION_BANK = window.PRACTICE_QUESTION_BANK || {};

  /* ===== OPTICS ============================================================ */

  B.youngs_double_slit = {
    en: [
      { q: "In Young's double-slit experiment, what is the condition (in terms of path difference) for a <b>bright</b> fringe at a point on the screen?",
        sol: "<p>Bright fringes (constructive interference) occur where the two waves arrive in phase. The path difference between the two slits must be a whole number of wavelengths:</p><p>\\[ \\Delta L = n\\lambda, \\quad n = 0, \\pm 1, \\pm 2, \\ldots \\]</p><p>For dark fringes (destructive interference) the path difference is a half-integer number of wavelengths: \\(\\Delta L = (n+\\tfrac12)\\lambda\\).</p>" },
      { q: "Light of wavelength \\(\\lambda = 600\\,\\text{nm}\\) passes through two slits separated by \\(a = 0.30\\,\\text{mm}\\). The screen is \\(D = 1.5\\,\\text{m}\\) away. Find the fringe separation \\(\\Delta y\\).",
        sol: "<p>Use \\( \\Delta y = \\dfrac{\\lambda D}{a}\\):</p><p>\\[ \\Delta y = \\frac{(600\\times10^{-9})(1.5)}{0.30\\times10^{-3}} = 3.0\\times10^{-3}\\,\\text{m} = 3.0\\,\\text{mm}. \\]</p>" },
      { q: "Using the same setup, the slit separation is doubled while everything else is unchanged. What happens to the fringe spacing, and why?",
        sol: "<p>From \\( \\Delta y = \\lambda D/a\\), \\(\\Delta y \\propto 1/a\\). Doubling \\(a\\) <b>halves</b> the fringe spacing.</p><p>Physically: a larger slit separation produces wave-fronts that meet at smaller angles, so the path difference changes by \\(\\lambda\\) over a shorter distance on the screen.</p>" },
      { q: "Red light produces fringes \\(2.4\\,\\text{mm}\\) apart. When the source is replaced by blue light keeping \\(a\\) and \\(D\\) the same, the fringes become \\(1.6\\,\\text{mm}\\) apart. If \\(\\lambda_{\\text{red}}=660\\,\\text{nm}\\), find \\(\\lambda_{\\text{blue}}\\).",
        sol: "<p>\\( \\Delta y \\propto \\lambda \\) so \\(\\dfrac{\\lambda_{\\text{blue}}}{\\lambda_{\\text{red}}} = \\dfrac{\\Delta y_{\\text{blue}}}{\\Delta y_{\\text{red}}} = \\dfrac{1.6}{2.4} = \\dfrac{2}{3}\\).</p><p>\\[ \\lambda_{\\text{blue}} = \\tfrac{2}{3}(660) = 440\\,\\text{nm}. \\]</p>" },
      { q: "Explain why the experiment fails to produce visible fringes if two ordinary light bulbs are used instead of a laser through two slits.",
        sol: "<p>Two independent bulbs are <b>incoherent</b> — their phase relationship varies randomly and rapidly with time. The interference pattern shifts faster than the eye (or any detector) can resolve, so on average the intensities simply add and no stable bright/dark pattern is seen.</p><p>A laser (or a single source split by two slits) is coherent: a fixed phase relationship between the two wave-trains is maintained, giving a stationary fringe pattern.</p>" },
    ],
    zh: [
      { q: "在楊氏雙縫實驗中，屏幕上某點出現<b>亮紋</b>的條件（以路徑差表示）是甚麼？",
        sol: "<p>亮紋對應相長干涉，兩波須同相到達。兩縫的路徑差必為波長的整數倍：</p><p>\\[ \\Delta L = n\\lambda, \\quad n = 0, \\pm 1, \\pm 2, \\ldots \\]</p><p>暗紋（相消干涉）的路徑差為半整數波長：\\(\\Delta L = (n+\\tfrac12)\\lambda\\)。</p>" },
      { q: "波長 \\(\\lambda = 600\\,\\text{nm}\\) 的光通過兩條相距 \\(a = 0.30\\,\\text{mm}\\) 的狹縫，屏距 \\(D = 1.5\\,\\text{m}\\)。求條紋間距 \\(\\Delta y\\)。",
        sol: "<p>使用 \\( \\Delta y = \\dfrac{\\lambda D}{a}\\)：</p><p>\\[ \\Delta y = \\frac{(600\\times10^{-9})(1.5)}{0.30\\times10^{-3}} = 3.0\\times10^{-3}\\,\\text{m} = 3.0\\,\\text{mm}. \\]</p>" },
      { q: "保持其他條件不變，將狹縫間距加倍，條紋間距會如何改變？為甚麼？",
        sol: "<p>由 \\( \\Delta y = \\lambda D/a\\)，\\(\\Delta y \\propto 1/a\\)。\\(a\\) 加倍則 \\(\\Delta y\\) <b>減半</b>。</p><p>物理上：縫距愈大，兩波前在屏上以較小角度相遇，路徑差改變 \\(\\lambda\\) 所需距離較短，故條紋更密。</p>" },
      { q: "紅光形成 \\(2.4\\,\\text{mm}\\) 的條紋間距；換成藍光（\\(a\\)、\\(D\\) 不變）後，條紋間距為 \\(1.6\\,\\text{mm}\\)。若 \\(\\lambda_{\\text{紅}}=660\\,\\text{nm}\\)，求 \\(\\lambda_{\\text{藍}}\\)。",
        sol: "<p>\\( \\Delta y \\propto \\lambda \\)，所以 \\(\\dfrac{\\lambda_{\\text{藍}}}{\\lambda_{\\text{紅}}} = \\dfrac{1.6}{2.4} = \\dfrac{2}{3}\\)。</p><p>\\[ \\lambda_{\\text{藍}} = \\tfrac{2}{3}(660) = 440\\,\\text{nm}. \\]</p>" },
      { q: "若以兩個普通燈泡（每個對準一條縫）取代雷射，實驗將無法觀察到清晰條紋，為甚麼？",
        sol: "<p>兩獨立燈泡屬<b>非相干</b>光源：其相位差隨時間隨機快速變化，干涉圖形的位置以高於肉眼（或任何偵測器）解析速率移動，平均後只見強度疊加，並無穩定明暗條紋。</p><p>雷射（或單一光源透過雙縫）是相干的，兩波列保持固定相位關係，故條紋穩定可見。</p>" },
    ],
  };

  B.diffraction_grating = {
    en: [
      { q: "State the diffraction grating equation and explain each symbol.",
        sol: "<p>\\[ d\\sin\\theta = n\\lambda \\]</p><p>where \\(d\\) is the grating spacing (distance between adjacent slits, equal to \\(1/N\\) where \\(N\\) is the number of lines per metre), \\(\\theta\\) is the diffraction angle measured from the normal, \\(n\\) is the order of the maximum (\\(0,\\pm1,\\pm2,\\ldots\\)) and \\(\\lambda\\) is the wavelength of the light.</p>" },
      { q: "A grating has \\(600\\) lines per millimetre. Calculate the angle of the first-order maximum for sodium light, \\(\\lambda = 589\\,\\text{nm}\\).",
        sol: "<p>Grating spacing: \\( d = \\dfrac{1}{600\\times10^3\\,\\text{m}^{-1}} = 1.667\\times10^{-6}\\,\\text{m}\\).</p><p>For \\(n=1\\):</p><p>\\[ \\sin\\theta = \\frac{\\lambda}{d} = \\frac{589\\times10^{-9}}{1.667\\times10^{-6}} = 0.3534. \\]</p><p>\\(\\theta = \\arcsin(0.3534) \\approx 20.7^{\\circ}\\).</p>" },
      { q: "What is the maximum order \\(n\\) that the grating in Q2 can produce for sodium light?",
        sol: "<p>The largest physically possible angle is \\(90^\\circ\\), so \\(\\sin\\theta \\le 1\\) gives</p><p>\\[ n_\\max = \\left\\lfloor \\frac{d}{\\lambda} \\right\\rfloor = \\left\\lfloor \\frac{1.667\\times10^{-6}}{589\\times10^{-9}} \\right\\rfloor = \\lfloor 2.83 \\rfloor = 2. \\]</p><p>So orders \\(n=0,\\pm1,\\pm2\\) are observable; \\(n=\\pm3\\) is not.</p>" },
      { q: "Compare the spectrum from a diffraction grating with that from a prism.",
        sol: "<p><b>Grating:</b> Splits light by diffraction; longer wavelengths deviate <b>more</b> (\\(\\sin\\theta=n\\lambda/d\\)). Multiple orders, sharp lines, evenly distributed in \\(\\sin\\theta\\), suitable for accurate wavelength measurement.</p><p><b>Prism:</b> Splits light by refraction; shorter wavelengths deviate <b>more</b> due to dispersion. Only one spectrum, non-linear in wavelength, brighter but less sharp.</p>" },
      { q: "Explain why bright fringes from a grating are much sharper than those from a double slit.",
        sol: "<p>With \\(N\\) slits, a maximum requires every pair of slits to interfere constructively. A small angular deviation that destroys the constructive condition for distant pairs of slits causes complete cancellation. The principal maxima narrow by a factor \\(\\sim 1/N\\) in angular width compared with two slits, giving sharp, easily resolved spectral lines.</p>" },
    ],
    zh: [
      { q: "寫出衍射光柵方程並解釋各符號。",
        sol: "<p>\\[ d\\sin\\theta = n\\lambda \\]</p><p>其中 \\(d\\) 為光柵間距（相鄰縫距離，等於 \\(1/N\\)，\\(N\\) 為每米線數），\\(\\theta\\) 為偏離法線的衍射角，\\(n\\) 為級數（\\(0,\\pm1,\\pm2,\\ldots\\)），\\(\\lambda\\) 為光的波長。</p>" },
      { q: "光柵每毫米有 600 條線。求鈉光（\\(\\lambda = 589\\,\\text{nm}\\)）的一級主極大角度。",
        sol: "<p>光柵間距 \\( d = \\dfrac{1}{600\\times10^3} = 1.667\\times10^{-6}\\,\\text{m}\\)。</p><p>令 \\(n=1\\)：</p><p>\\[ \\sin\\theta = \\frac{\\lambda}{d} = \\frac{589\\times10^{-9}}{1.667\\times10^{-6}} = 0.3534. \\]</p><p>\\(\\theta \\approx 20.7^{\\circ}\\)。</p>" },
      { q: "上題光柵能觀察到的鈉光最高級數 \\(n\\) 為多少？",
        sol: "<p>因 \\(\\sin\\theta \\le 1\\)：</p><p>\\[ n_\\max = \\left\\lfloor \\frac{d}{\\lambda} \\right\\rfloor = \\lfloor 2.83 \\rfloor = 2. \\]</p><p>故可見 \\(n=0,\\pm1,\\pm2\\)，但 \\(n=\\pm3\\) 不存在。</p>" },
      { q: "比較光柵與三棱鏡所產生的光譜。",
        sol: "<p><b>光柵：</b>由衍射分光；波長愈長偏離愈<b>大</b>。能形成多級光譜、譜線銳利、在 \\(\\sin\\theta\\) 上等距分佈，適合精確測波長。</p><p><b>棱鏡：</b>由折射分光；波長愈短偏離愈<b>大</b>。只有一條光譜、波長分佈不均，亮度較強但譜線較粗。</p>" },
      { q: "為何光柵的亮紋比雙縫的亮紋更銳利？",
        sol: "<p>光柵有 \\(N\\) 條縫，欲產生主極大需所有縫對之間都相長干涉。一旦角度稍偏，遠離縫對之間的相消干涉便足以完全抵消，使主極大角寬度約縮小至雙縫的 \\(1/N\\) 倍，故譜線銳利、易分辨。</p>" },
    ],
  };

  B.convex_lens = {
    en: [
      { q: "An object is placed \\(30\\,\\text{cm}\\) from a thin convex lens of focal length \\(f = 10\\,\\text{cm}\\). Find the image distance and magnification.",
        sol: "<p>Use the thin-lens equation \\( \\dfrac{1}{v} - \\dfrac{1}{u} = \\dfrac{1}{f}\\) (Cartesian, real-is-positive convention with \\(u=-30\\,\\text{cm}\\), \\(f=+10\\,\\text{cm}\\)).</p><p>\\[ \\tfrac{1}{v} = \\tfrac{1}{f} + \\tfrac{1}{u} = \\tfrac{1}{10} - \\tfrac{1}{30} = \\tfrac{2}{30}, \\quad v = +15\\,\\text{cm}. \\]</p><p>Magnification: \\( m = v/u = 15/(-30) = -0.5\\). Image is real, inverted, half-size, on the opposite side of the lens.</p>" },
      { q: "Where must an object be placed so that a convex lens of focal length \\(f\\) produces a virtual, upright, magnified image?",
        sol: "<p>The object must be placed <b>between the lens and the focal point</b>: \\(0 < u < f\\). The diverging refracted rays appear to come from a point on the same side as the object, producing a virtual, upright, enlarged image (this is how a magnifying glass works).</p>" },
      { q: "List the three principal rays used to construct the image of an extended object.",
        sol: "<ol class='list-decimal pl-5 space-y-1'><li>A ray parallel to the principal axis refracts through the focal point on the far side.</li><li>A ray through the optical centre passes undeviated.</li><li>A ray through the near focal point emerges parallel to the principal axis.</li></ol><p>Two of these rays are sufficient; the third is a check.</p>" },
      { q: "An object \\(2.0\\,\\text{cm}\\) tall is placed \\(15\\,\\text{cm}\\) from a converging lens; the image formed on a screen is \\(6.0\\,\\text{cm}\\) tall. Find \\(f\\).",
        sol: "<p>Magnification \\(|m| = h_i/h_o = 6.0/2.0 = 3.0\\), and since image is real (caught on screen) it is inverted: \\(m=-3\\). So \\(v = -mu = 3u = 3(15)=45\\,\\text{cm}\\).</p><p>\\[ \\tfrac{1}{f}=\\tfrac{1}{v}+\\tfrac{1}{u}=\\tfrac{1}{45}+\\tfrac{1}{15}=\\tfrac{4}{45} \\Rightarrow f=11.25\\,\\text{cm}. \\]</p>" },
      { q: "A camera lens forms a sharp real image of a distant tree on a sensor. The photographer now zooms in on a nearby flower. In which direction must the lens be moved relative to the sensor, and why?",
        sol: "<p>For a distant object \\(u\\to-\\infty\\), the image forms at \\(v=f\\). When the object moves closer (\\(|u|\\) decreases), the lens equation forces \\(v\\) to <b>increase</b>. So the lens must be moved <b>further from the sensor</b> (extended) to refocus on the closer flower.</p>" },
    ],
    zh: [
      { q: "物件距薄凸透鏡（\\(f=10\\,\\text{cm}\\)）30 cm。求像距及放大率。",
        sol: "<p>透鏡公式 \\( \\dfrac{1}{v} - \\dfrac{1}{u} = \\dfrac{1}{f}\\)（取 \\(u=-30\\,\\text{cm}\\), \\(f=+10\\,\\text{cm}\\)）。</p><p>\\[ \\tfrac{1}{v} = \\tfrac{1}{10} - \\tfrac{1}{30} = \\tfrac{2}{30}, \\quad v = +15\\,\\text{cm}. \\]</p><p>放大率 \\(m = v/u = -0.5\\)。像為實像、倒立、縮小一半，位於透鏡另一側。</p>" },
      { q: "凸透鏡（焦距 \\(f\\)）要產生虛、正立、放大像，物件須放在何處？",
        sol: "<p>須將物件放在<b>透鏡與焦點之間</b>，即 \\(0 < u < f\\)。折射光線發散，似從物方一側某點射出，形成虛、正立、放大的像（即放大鏡之原理）。</p>" },
      { q: "列出作圖時使用的三條主光線。",
        sol: "<ol class='list-decimal pl-5 space-y-1'><li>平行主軸入射的光線，折射後通過遠側焦點。</li><li>通過光心的光線方向不變。</li><li>通過近側焦點的入射光線，折射後與主軸平行。</li></ol><p>任兩條即可定像位，第三條用作驗證。</p>" },
      { q: "高 2.0 cm 的物件距凸透鏡 15 cm；屏幕上實像高 6.0 cm。求 \\(f\\)。",
        sol: "<p>放大率 \\(|m|=6.0/2.0=3.0\\)；屏上為實像，故倒立 \\(m=-3\\)。\\(v=3u=45\\,\\text{cm}\\)。</p><p>\\[ \\tfrac{1}{f}=\\tfrac{1}{45}+\\tfrac{1}{15}=\\tfrac{4}{45} \\Rightarrow f=11.25\\,\\text{cm}. \\]</p>" },
      { q: "相機鏡頭可清晰拍到遠處樹木。現要近拍花朵，鏡頭應向感光元件移近還是移遠？為甚麼？",
        sol: "<p>遠物 \\(u\\to-\\infty\\)，像距 \\(v=f\\)。物件靠近時 \\(|u|\\) 變小，由透鏡公式 \\(v\\) 必<b>增大</b>。故鏡頭須<b>遠離感光元件</b>（即伸出）才能重新對焦近物。</p>" },
    ],
  };

  B.concave_lens = {
    en: [
      { q: "What kind of image does a single concave (diverging) lens always produce of a real object?",
        sol: "<p>A diverging lens always produces a <b>virtual, upright, diminished</b> image located on the <b>same side as the object</b> and <b>between the object and the lens</b>. This is true for any finite object distance.</p>" },
      { q: "An object is placed \\(20\\,\\text{cm}\\) from a concave lens of focal length \\(|f| = 10\\,\\text{cm}\\) (so \\(f=-10\\,\\text{cm}\\)). Find the image position.",
        sol: "<p>\\( \\dfrac{1}{v} = \\dfrac{1}{f} + \\dfrac{1}{u} = -\\dfrac{1}{10} + \\dfrac{1}{(-20)} = -\\dfrac{3}{20}\\).</p><p>\\(v = -6.67\\,\\text{cm}\\). The image is virtual, on the same side as the object, 6.7 cm from the lens. Magnification \\(m = v/u = (-6.67)/(-20) = +0.33\\) — upright and 1/3 the height.</p>" },
      { q: "Why can a concave lens never produce a real image of a real object?",
        sol: "<p>Parallel rays incident on a concave lens diverge after refraction, as if coming from the (virtual) focal point on the incident side. For any real object the refracted rays continue to diverge, so they never actually converge to form a real image; only their backward extensions meet, giving a virtual image.</p>" },
      { q: "A short-sighted (myopic) eye can only focus on objects closer than 50 cm. What kind of corrective lens is needed and what should its focal length be (to focus parallel light from infinity onto the far point)?",
        sol: "<p>A <b>diverging (concave)</b> lens is required so that distant light appears to come from the eye's far point.</p><p>For an object at infinity to image at \\(v=-50\\,\\text{cm}\\): \\( 1/f = 1/v - 1/u = 1/(-50) - 0 = -1/50\\), giving \\(f = -50\\,\\text{cm}\\) (power \\(P = -2.0\\,\\text{D}\\)).</p>" },
      { q: "Sketch (verbally describe) how the image size changes as a real object is moved from very far away towards a concave lens.",
        sol: "<ul class='list-disc pl-5 space-y-1'><li>When \\(u\\to-\\infty\\): image is a tiny point at the (virtual) focal point.</li><li>As the object approaches: the image grows but remains smaller than the object, always virtual and upright.</li><li>When \\(u\\to 0\\) (object touching lens): image and object coincide, both at the lens, life-size.</li></ul><p>The magnification \\(|m|\\) increases monotonically from 0 to 1 but never exceeds 1.</p>" },
    ],
    zh: [
      { q: "凹透鏡（發散透鏡）對實物所成的像有何特性？",
        sol: "<p>凹透鏡對任何實物均成<b>虛像、正立、縮小</b>，位於<b>物件同側</b>且<b>介於物件與透鏡之間</b>。對任何有限物距均適用。</p>" },
      { q: "焦距 \\(|f|=10\\,\\text{cm}\\) 的凹透鏡（即 \\(f=-10\\,\\text{cm}\\)），物距 20 cm。求像位。",
        sol: "<p>\\( \\dfrac{1}{v} = -\\dfrac{1}{10} + \\dfrac{1}{-20} = -\\dfrac{3}{20}\\)。</p><p>\\(v=-6.67\\,\\text{cm}\\)，虛像位於物方距透鏡 6.7 cm。\\(m=v/u=+0.33\\)，正立且為原高 1/3。</p>" },
      { q: "為何凹透鏡無法對實物形成實像？",
        sol: "<p>平行光經凹透鏡後發散，似從入射方虛焦點射出。任何實物的折射光線均持續發散，不能會聚為實像，只能由反向延長線相交形成虛像。</p>" },
      { q: "近視眼只能看清 50 cm 以內物件。需何種矯正鏡？焦距為何（使無限遠光成像於遠點）？",
        sol: "<p>需<b>凹（發散）透鏡</b>，使遠物之光看似來自眼之遠點。</p><p>令 \\(u\\to-\\infty\\)、\\(v=-50\\,\\text{cm}\\)：\\( 1/f = -1/50\\)，故 \\(f=-50\\,\\text{cm}\\)（屈光度 \\(P=-2.0\\,\\text{D}\\)）。</p>" },
      { q: "描述實物由極遠處逐漸靠近凹透鏡時，像的大小如何變化。",
        sol: "<ul class='list-disc pl-5 space-y-1'><li>\\(u\\to-\\infty\\)：像為一點，位於虛焦點。</li><li>物件靠近：像逐漸變大，但始終小於物件，永遠虛、正立。</li><li>\\(u\\to 0\\)：像與物件重合於透鏡處，等大。</li></ul><p>放大率 \\(|m|\\) 由 0 單調增至 1，從不超過 1。</p>" },
    ],
  };

  B.primary_colour = {
    en: [
      { q: "Name the three primary colours of light and the secondary colour produced by mixing each pair.",
        sol: "<p>Primaries: <span style='color:#dc2626'>Red</span>, <span style='color:#16a34a'>Green</span>, <span style='color:#2563eb'>Blue</span>.</p><ul class='list-disc pl-5'><li>Red + Green → <b>Yellow</b></li><li>Green + Blue → <b>Cyan</b></li><li>Red + Blue → <b>Magenta</b></li><li>Red + Green + Blue → <b>White</b></li></ul>" },
      { q: "Why are the primary colours of <b>light</b> different from the primary <b>pigments</b> used by painters?",
        sol: "<p>Light mixing is <b>additive</b>: each colour adds energy of its own wavelength range, so adding all three gives white. Pigment mixing is <b>subtractive</b>: each pigment <b>absorbs</b> certain wavelengths and reflects the rest, so adding pigments removes more wavelengths, tending towards black. The painter's primaries (cyan, magenta, yellow) are precisely the <b>secondary</b> colours of light.</p>" },
      { q: "A white shirt illuminated by a pure red light appears red. Explain why a pure blue dress under the same red light looks black.",
        sol: "<p>A white shirt reflects all visible wavelengths, including the incident red, so it appears red. A pure blue pigment <b>absorbs</b> red and green wavelengths and reflects only blue. Under red illumination there is no blue light to reflect and no other colour reflected, so the dress appears <b>black</b>.</p>" },
      { q: "On a stage, a magenta spotlight and a green spotlight illuminate the same area. What colour does the audience see, and why?",
        sol: "<p>Magenta is Red+Blue; adding Green completes the set R+G+B, so the result is <b>white</b>.</p><p>That is why complementary colour pairs (R↔Cyan, G↔Magenta, B↔Yellow) are called complementary: each pair together produces white.</p>" },
      { q: "How does a colour TV or smartphone screen create the perception of millions of colours from only three colours of sub-pixel?",
        sol: "<p>Each pixel contains tiny red, green, and blue sub-emitters too small to be resolved by the eye at normal viewing distance. By independently controlling the brightness (intensity) of each sub-pixel, additive mixing gives a continuous range of perceived colours. The eye's three colour-sensitive cone types (L, M, S) respond to these mixtures the same way they would to a pure spectral colour, fooling the brain into perceiving the intended hue.</p>" },
    ],
    zh: [
      { q: "光的三原色為何？兩兩相加分別得甚麼色？",
        sol: "<p>三原色：<span style='color:#dc2626'>紅</span>、<span style='color:#16a34a'>綠</span>、<span style='color:#2563eb'>藍</span>。</p><ul class='list-disc pl-5'><li>紅 + 綠 → <b>黃</b></li><li>綠 + 藍 → <b>青</b></li><li>紅 + 藍 → <b>品紅</b></li><li>紅 + 綠 + 藍 → <b>白</b></li></ul>" },
      { q: "為何<b>光</b>的三原色與畫家的<b>顏料</b>三原色不同？",
        sol: "<p>光屬<b>加色法</b>：每種顏色增加其波長能量，三色齊備即得白色。顏料屬<b>減色法</b>：每種顏料吸收某些波長、反射其餘，混合愈多吸收愈多，趨向黑色。畫家的三原色（青、品紅、黃）正是光的三<b>次色</b>。</p>" },
      { q: "白色襯衫在純紅光下看起來呈紅色；同樣紅光下的純藍裙卻呈黑色。為甚麼？",
        sol: "<p>白色反射所有可見波長，故反射紅光呈紅。純藍顏料<b>吸收</b>紅、綠光，只反射藍光。在純紅光下無藍光可反射，故裙子呈<b>黑色</b>。</p>" },
      { q: "舞台上品紅燈與綠燈同時照射同一處，觀眾看到甚麼色？為甚麼？",
        sol: "<p>品紅 = 紅 + 藍；再加綠即 R+G+B，結果為<b>白色</b>。</p><p>這也是補色對（紅↔青、綠↔品紅、藍↔黃）的定義：兩補色相加得白光。</p>" },
      { q: "彩色電視或手機屏幕只用三種顏色的次像素，如何呈現數以百萬計的顏色？",
        sol: "<p>每像素由極小的紅、綠、藍三色次像素組成，正常觀看距離下肉眼無法分辨。獨立調整每色亮度，加色混合便產生連續色彩。眼中三種視錐（L、M、S）對此混合的反應與對純光譜色相同，故大腦感知到對應的色調。</p>" },
    ],
  };

  /* ===== MECHANICS ========================================================= */

  B.ball_string = {
    en: [
      { q: "A ball of mass \\(0.20\\,\\text{kg}\\) is whirled in a horizontal circle of radius \\(0.50\\,\\text{m}\\) at \\(4.0\\,\\text{m s}^{-1}\\). Calculate the centripetal force.",
        sol: "<p>\\( F_c = \\dfrac{mv^2}{r} = \\dfrac{(0.20)(4.0)^2}{0.50} = 6.4\\,\\text{N}.\\)</p><p>This force is provided by the horizontal component of the string tension.</p>" },
      { q: "What provides the centripetal force when a ball on a string is whirled in a vertical circle, at the <b>top</b> of the loop?",
        sol: "<p>At the top, both the weight \\(mg\\) and the tension \\(T\\) point downward (towards the centre):</p><p>\\[ T + mg = \\frac{mv^2}{r}. \\]</p><p>The centripetal force is the <b>sum</b> of tension and weight. The minimum speed at the top occurs when \\(T = 0\\): \\(v_{\\min}=\\sqrt{gr}\\).</p>" },
      { q: "A 0.30 kg ball is swung in a vertical circle of radius 0.80 m. Find the minimum speed at the top of the circle for the string to remain taut.",
        sol: "<p>String just taut means \\(T=0\\), so \\( mg = mv^2/r\\), giving \\(v_{\\min}=\\sqrt{gr}\\).</p><p>\\[ v_{\\min} = \\sqrt{(9.81)(0.80)} = 2.80\\,\\text{m s}^{-1}. \\]</p>" },
      { q: "If the speed of a ball moving in a horizontal circle doubles (mass and radius unchanged), by what factor does the centripetal force change?",
        sol: "<p>\\( F_c \\propto v^2\\). Doubling \\(v\\) multiplies \\(F_c\\) by \\(2^2 = 4\\).</p><p>This is why the string is much more likely to break at high spin rates — required tension scales with the square of speed.</p>" },
      { q: "Explain in terms of Newton's first law why the ball would fly off in a straight line if the string suddenly snaps.",
        sol: "<p>While moving in a circle the ball constantly experiences a centripetal (inward) force from the string, which changes its direction but not its speed. If the string snaps, the unbalanced force vanishes. By Newton's first law the ball continues with the velocity it had at that instant — <b>tangent</b> to the circle at the snap point — moving in a straight line at constant speed (gravity ignored or treated separately).</p>" },
    ],
    zh: [
      { q: "0.20 kg 的球以 \\(4.0\\,\\text{m s}^{-1}\\) 在半徑 0.50 m 的水平圓周上轉動。求向心力。",
        sol: "<p>\\( F_c = \\dfrac{mv^2}{r} = \\dfrac{(0.20)(4.0)^2}{0.50} = 6.4\\,\\text{N}.\\)</p><p>此力由繩張力的水平分量提供。</p>" },
      { q: "球在豎直圓周轉動時，<b>圓頂</b>位置的向心力由甚麼提供？",
        sol: "<p>在頂部，重力 \\(mg\\) 與張力 \\(T\\) 同向（指向圓心，向下）：</p><p>\\[ T + mg = \\frac{mv^2}{r}. \\]</p><p>向心力為兩者之<b>和</b>。最低速時 \\(T=0\\)：\\(v_{\\min}=\\sqrt{gr}\\)。</p>" },
      { q: "0.30 kg 的球在半徑 0.80 m 的豎直圓周上轉動。求保持繩繃緊的最低頂點速度。",
        sol: "<p>\\(T=0\\) 時 \\(mg=mv^2/r\\)，故 \\(v_{\\min}=\\sqrt{gr}\\)：</p><p>\\[ v_{\\min} = \\sqrt{(9.81)(0.80)} = 2.80\\,\\text{m s}^{-1}. \\]</p>" },
      { q: "若水平圓周運動中球的速度加倍（質量、半徑不變），向心力變幾倍？",
        sol: "<p>\\(F_c \\propto v^2\\)。\\(v\\) 加倍則 \\(F_c\\) 變 \\(2^2=4\\) 倍。</p><p>故高速旋轉時繩易斷——所需張力與速度平方成正比。</p>" },
      { q: "用牛頓第一定律解釋：若繩突然斷裂，球將沿何方向飛出？",
        sol: "<p>圓周運動中球持續受向心力改變方向但不改變速率。繩斷後合外力消失（暫不計重力），由牛頓第一定律球將以斷裂瞬間的速度（即該點的<b>切線</b>方向）以等速作直線運動。</p>" },
    ],
  };

  B.force_vector = {
    en: [
      { q: "Two forces, \\(3.0\\,\\text{N}\\) east and \\(4.0\\,\\text{N}\\) north, act at a point. Find the resultant force.",
        sol: "<p>The forces are perpendicular, so use Pythagoras:</p><p>\\[ R = \\sqrt{3.0^2 + 4.0^2} = 5.0\\,\\text{N}. \\]</p><p>Direction \\(\\theta\\) (measured from east, towards north): \\(\\tan\\theta = 4/3\\Rightarrow \\theta \\approx 53^\\circ\\). So \\(R = 5.0\\,\\text{N}\\) at \\(53^\\circ\\) N of E.</p>" },
      { q: "Two forces of \\(6.0\\,\\text{N}\\) and \\(8.0\\,\\text{N}\\) act at \\(60^{\\circ}\\) to each other. Find the magnitude of the resultant using the cosine rule.",
        sol: "<p>The angle between the forces in the parallelogram is \\(60^\\circ\\); the angle inside the triangle (cosine rule form) is \\(180^\\circ-60^\\circ=120^\\circ\\):</p><p>\\[ R = \\sqrt{6^2 + 8^2 - 2(6)(8)\\cos120^\\circ} = \\sqrt{36+64+48} = \\sqrt{148} \\approx 12.2\\,\\text{N}. \\]</p>" },
      { q: "Decompose a \\(50\\,\\text{N}\\) force acting at \\(30^{\\circ}\\) above the horizontal into horizontal and vertical components.",
        sol: "<p>\\( F_x = F\\cos\\theta = 50\\cos30^\\circ = 43.3\\,\\text{N}\\) (horizontal).</p><p>\\( F_y = F\\sin\\theta = 50\\sin30^\\circ = 25.0\\,\\text{N}\\) (vertical).</p>" },
      { q: "Three forces are in equilibrium. State the conditions on their vector representation and a simple check using a triangle.",
        sol: "<p>Vectorially: \\( \\vec F_1 + \\vec F_2 + \\vec F_3 = 0\\). Equivalently, drawn head-to-tail in any order, the three force vectors form a <b>closed triangle</b>. Each force equals the resultant of the other two reversed; they obey the sine rule (Lami's theorem):</p><p>\\[ \\frac{F_1}{\\sin\\alpha_1}=\\frac{F_2}{\\sin\\alpha_2}=\\frac{F_3}{\\sin\\alpha_3} \\]</p><p>where \\(\\alpha_i\\) is the angle <i>opposite</i> \\(F_i\\) (i.e. between the other two forces).</p>" },
      { q: "A box is pulled with two ropes that make equal angles \\(\\theta\\) with the forward direction. Each rope has tension \\(T\\). Find the resultant pull and explain the effect of \\(\\theta\\).",
            sol: "<p>The perpendicular components cancel; the forward components add:</p><p>\\[ R = 2T\\cos\\theta. \\]</p><p>If \\(\\theta=0\\) (ropes parallel to motion) \\(R=2T\\), maximum. As \\(\\theta\\to90^\\circ\\), \\(R\\to0\\). So for efficient pulling the ropes should be as close to the direction of motion as possible.</p>" },
    ],
    zh: [
      { q: "在一點同時施加 3.0 N（向東）和 4.0 N（向北）兩力。求合力。",
        sol: "<p>兩力垂直，由勾股定理：</p><p>\\[ R = \\sqrt{3.0^2 + 4.0^2} = 5.0\\,\\text{N}. \\]</p><p>方向 \\(\\tan\\theta = 4/3\\Rightarrow \\theta \\approx 53^\\circ\\)（東偏北）。</p>" },
      { q: "6.0 N 與 8.0 N 兩力夾角 \\(60^\\circ\\)。用餘弦定理求合力大小。",
        sol: "<p>三角形內對應角 \\(180^\\circ-60^\\circ=120^\\circ\\)：</p><p>\\[ R = \\sqrt{6^2 + 8^2 - 2(6)(8)\\cos120^\\circ} = \\sqrt{148} \\approx 12.2\\,\\text{N}. \\]</p>" },
      { q: "將 50 N、與水平面成 \\(30^\\circ\\) 的力分解為水平和豎直分量。",
        sol: "<p>\\( F_x = 50\\cos30^\\circ = 43.3\\,\\text{N}\\)；\\( F_y = 50\\sin30^\\circ = 25.0\\,\\text{N}\\)。</p>" },
      { q: "三力平衡，向量表示及作圖驗證為何？",
        sol: "<p>\\( \\vec F_1 + \\vec F_2 + \\vec F_3 = 0\\)；以首尾相接畫成<b>閉合三角形</b>。每力等於其餘兩力之反向合力。並滿足 Lami 定理：</p><p>\\[ \\frac{F_1}{\\sin\\alpha_1}=\\frac{F_2}{\\sin\\alpha_2}=\\frac{F_3}{\\sin\\alpha_3}, \\]</p><p>其中 \\(\\alpha_i\\) 為 \\(F_i\\) 的對角（即另兩力之夾角）。</p>" },
      { q: "兩繩拉箱，各與前進方向成 \\(\\theta\\) 角，繩張力均為 \\(T\\)。求合力，並討論 \\(\\theta\\) 的影響。",
        sol: "<p>垂直分量互相抵消，沿前進方向：</p><p>\\[ R = 2T\\cos\\theta. \\]</p><p>\\(\\theta=0\\) 時 \\(R=2T\\) 最大；\\(\\theta\\to90^\\circ\\) 時 \\(R\\to0\\)。故拉繩應盡量沿前進方向以提高效率。</p>" },
    ],
  };

  B.projectile_motion = {
    en: [
      { q: "A ball is projected horizontally at \\(15\\,\\text{m s}^{-1}\\) from a cliff \\(45\\,\\text{m}\\) high. Find (a) the time to reach the ground and (b) the horizontal range. (Take \\(g = 10\\,\\text{m s}^{-2}\\)).",
        sol: "<p>(a) Vertical: \\( h = \\tfrac12 g t^2 \\Rightarrow t = \\sqrt{2h/g} = \\sqrt{2(45)/10} = 3.0\\,\\text{s}.\\)</p><p>(b) Horizontal: \\( R = u_x t = 15(3.0) = 45\\,\\text{m}.\\)</p>" },
      { q: "Show that for a projectile launched at speed \\(u\\) and angle \\(\\theta\\) on level ground, the range is \\(R = \\dfrac{u^2 \\sin 2\\theta}{g}\\).",
        sol: "<p>\\( u_x = u\\cos\\theta\\), \\( u_y = u\\sin\\theta\\). Time of flight: \\( t_f = 2u\\sin\\theta/g\\).</p><p>\\[ R = u_x t_f = (u\\cos\\theta)\\!\\left(\\tfrac{2u\\sin\\theta}{g}\\right) = \\frac{u^2\\,(2\\sin\\theta\\cos\\theta)}{g} = \\frac{u^2\\sin 2\\theta}{g}. \\]</p><p>Maximum range occurs at \\(2\\theta = 90^\\circ\\Rightarrow \\theta=45^\\circ\\).</p>" },
      { q: "A football is kicked at \\(20\\,\\text{m s}^{-1}\\) at \\(30^{\\circ}\\) above the horizontal. Find the maximum height and the time of flight (\\(g=9.81\\,\\text{m s}^{-2}\\)).",
        sol: "<p>\\( u_y = 20\\sin30^\\circ = 10\\,\\text{m s}^{-1}\\).</p><p>Max height: \\( H = u_y^2/(2g) = 100/19.62 = 5.10\\,\\text{m}.\\)</p><p>Time of flight: \\( t_f = 2u_y/g = 20/9.81 = 2.04\\,\\text{s}.\\)</p>" },
      { q: "Sketch (describe) the velocity-time graphs for the horizontal and vertical components of a projectile launched at an angle, neglecting air resistance.",
        sol: "<p><b>Horizontal velocity vs time:</b> a horizontal straight line at \\(v_x = u\\cos\\theta\\) (constant; no horizontal force).</p><p><b>Vertical velocity vs time:</b> a straight line of slope \\(-g\\), starting at \\(u_y = u\\sin\\theta\\), crossing zero at the apex, then becoming negative — gradient constant throughout.</p>" },
      { q: "Two stones are released from the same height: stone A is dropped, stone B is thrown horizontally. Which hits the ground first, and why?",
        sol: "<p>They reach the ground <b>at the same time</b>.</p><p>The vertical and horizontal motions are independent. Both stones experience the same vertical acceleration \\(g\\) and start with zero vertical velocity, so the time to fall a given height \\(h\\) is the same: \\(t = \\sqrt{2h/g}\\). Stone B simply travels further horizontally during that time.</p>" },
    ],
    zh: [
      { q: "從 45 m 高的崖頂以 \\(15\\,\\text{m s}^{-1}\\) 水平拋出。求 (a) 落地時間及 (b) 水平射程。（取 \\(g=10\\,\\text{m s}^{-2}\\)）",
        sol: "<p>(a) \\( h = \\tfrac12 g t^2 \\Rightarrow t = \\sqrt{2h/g} = 3.0\\,\\text{s}.\\)</p><p>(b) \\( R = u_x t = 15(3.0) = 45\\,\\text{m}.\\)</p>" },
      { q: "證明在平地上以 \\(u\\) 與角度 \\(\\theta\\) 拋出物體時，水平射程為 \\(R = \\dfrac{u^2 \\sin 2\\theta}{g}\\)。",
        sol: "<p>\\(u_x = u\\cos\\theta\\)、\\(u_y = u\\sin\\theta\\)。飛行時間 \\(t_f = 2u\\sin\\theta/g\\)：</p><p>\\[ R = u_x t_f = \\frac{u^2(2\\sin\\theta\\cos\\theta)}{g} = \\frac{u^2\\sin 2\\theta}{g}. \\]</p><p>當 \\(\\theta=45^\\circ\\) 時射程最大。</p>" },
      { q: "足球以 \\(20\\,\\text{m s}^{-1}\\)、與水平成 \\(30^\\circ\\) 角踢出。求最大高度及飛行時間（\\(g=9.81\\)）。",
        sol: "<p>\\( u_y = 10\\,\\text{m s}^{-1}\\)。</p><p>\\( H = u_y^2/(2g) = 5.10\\,\\text{m}\\)；\\( t_f = 2u_y/g = 2.04\\,\\text{s}.\\)</p>" },
      { q: "描述斜拋運動中水平及豎直速度對時間的圖像（忽略空氣阻力）。",
        sol: "<p><b>水平 \\(v_x\\)–\\(t\\)：</b>水平直線於 \\(u\\cos\\theta\\)（無水平力）。</p><p><b>豎直 \\(v_y\\)–\\(t\\)：</b>斜率為 \\(-g\\) 的直線，由 \\(u\\sin\\theta\\) 起始，於最高點過零後變負；斜率全程不變。</p>" },
      { q: "從同一高度同時釋放兩石：A 由靜止掉下，B 水平拋出。兩者哪個先落地？為甚麼？",
        sol: "<p>兩者<b>同時落地</b>。豎直與水平方向獨立；兩石豎直方向起始速度均為零，加速度均為 \\(g\\)，故下墜時間 \\(t=\\sqrt{2h/g}\\) 相同。B 只是同時間內多走了水平距離。</p>" },
    ],
  };

  B.momentum_collision = {
    en: [
      { q: "Cart A (mass 2.0 kg) at \\(3.0\\,\\text{m s}^{-1}\\) collides with stationary cart B (mass 1.0 kg) and sticks to it. Find the common velocity after collision.",
        sol: "<p>Conservation of linear momentum:</p><p>\\[ m_A u_A + m_B u_B = (m_A + m_B) v. \\]</p><p>\\( v = \\dfrac{(2.0)(3.0)+(1.0)(0)}{2.0+1.0} = 2.0\\,\\text{m s}^{-1}\\) in A's original direction.</p>" },
      { q: "Calculate the kinetic energy lost in the collision in Q1, and explain where it goes.",
        sol: "<p>KE before: \\( \\tfrac12(2.0)(3.0)^2 = 9.0\\,\\text{J}\\). KE after: \\( \\tfrac12(3.0)(2.0)^2 = 6.0\\,\\text{J}\\).</p><p>Lost: \\(9.0 - 6.0 = 3.0\\,\\text{J}\\) (33%).</p><p>This is converted to internal energy (heat in the coupling), sound and small permanent deformation. The collision is <b>perfectly inelastic</b>.</p>" },
      { q: "State the difference between an <b>elastic</b> and an <b>inelastic</b> collision, and give the conserved quantity in each.",
        sol: "<p><b>Both</b> conserve total momentum (no external impulsive force).</p><ul class='list-disc pl-5'><li><b>Elastic:</b> Kinetic energy is also conserved.</li><li><b>Inelastic:</b> Total KE decreases (some becomes heat, sound, deformation).</li><li><b>Perfectly inelastic:</b> The objects stick and move together; maximum KE loss consistent with momentum conservation.</li></ul>" },
      { q: "Two equal-mass trolleys make a 1-D elastic collision: trolley A moves at \\(u\\), trolley B is at rest. Show that they exchange velocities.",
        sol: "<p>Let final velocities be \\(v_A\\) and \\(v_B\\). Momentum: \\(mu = mv_A + mv_B\\Rightarrow v_A + v_B = u\\). Elastic ⇒ KE conserved: \\(u^2 = v_A^2 + v_B^2\\).</p><p>Substitute \\(v_A = u - v_B\\) into the energy equation: \\(u^2 = (u-v_B)^2 + v_B^2\\Rightarrow 2v_B(v_B - u) = 0\\). Non-trivial solution \\(v_B = u, v_A = 0\\).</p><p>So A stops and B moves off with the original speed of A.</p>" },
      { q: "A 60 kg skater throws a 2.0 kg ball horizontally at \\(10\\,\\text{m s}^{-1}\\). Find the recoil speed of the skater (initially at rest, frictionless ice).",
        sol: "<p>Total initial momentum is zero, so:</p><p>\\[ m_s v_s + m_b v_b = 0 \\Rightarrow v_s = -\\frac{m_b v_b}{m_s} = -\\frac{(2.0)(10)}{60} = -0.33\\,\\text{m s}^{-1}.\\]</p><p>The skater moves at \\(0.33\\,\\text{m s}^{-1}\\) in the direction opposite to the ball.</p>" },
    ],
    zh: [
      { q: "A 車（2.0 kg）以 \\(3.0\\,\\text{m s}^{-1}\\) 撞上靜止的 B 車（1.0 kg）並黏在一起。求碰後共同速度。",
        sol: "<p>動量守恆：</p><p>\\[ m_A u_A + m_B u_B = (m_A + m_B) v. \\]</p><p>\\( v = \\dfrac{(2.0)(3.0)+0}{3.0} = 2.0\\,\\text{m s}^{-1}\\)（沿 A 原方向）。</p>" },
      { q: "求第 1 題中損失的動能，並說明能量去向。",
        sol: "<p>碰前 KE \\(=\\tfrac12(2.0)(3.0)^2 = 9.0\\,\\text{J}\\)；碰後 \\(=\\tfrac12(3.0)(2.0)^2 = 6.0\\,\\text{J}\\)。</p><p>損失 \\(3.0\\,\\text{J}\\)（33%）。轉化為內能（聯結處發熱）、聲能及微量永久形變。屬<b>完全非彈性碰撞</b>。</p>" },
      { q: "彈性與非彈性碰撞有何分別？各守恆甚麼？",
        sol: "<p><b>兩者</b>均守恆總動量（無外力衝量）。</p><ul class='list-disc pl-5'><li><b>彈性：</b>動能亦守恆。</li><li><b>非彈性：</b>動能減少（轉為熱、聲、形變）。</li><li><b>完全非彈性：</b>兩物黏合同行；動能損失最大。</li></ul>" },
      { q: "兩等質量小車作一維彈性碰撞：A 以 \\(u\\) 撞靜止的 B。證明兩者交換速度。",
        sol: "<p>動量：\\(mu = mv_A + mv_B\\Rightarrow v_A+v_B=u\\)。動能：\\(u^2 = v_A^2 + v_B^2\\)。代入解得 \\(v_B = u, v_A = 0\\)。即 A 停下，B 以 A 原速前進。</p>" },
      { q: "60 kg 溜冰者水平擲出 2.0 kg 的球（速度 \\(10\\,\\text{m s}^{-1}\\)）。求其反衝速度（冰面無摩擦，初靜止）。",
        sol: "<p>總初動量為零：</p><p>\\[ v_s = -\\frac{m_b v_b}{m_s} = -\\frac{(2.0)(10)}{60} = -0.33\\,\\text{m s}^{-1}.\\]</p><p>溜冰者以 \\(0.33\\,\\text{m s}^{-1}\\) 反向運動。</p>" },
    ],
  };

  B.inclined_plane = {
    en: [
      { q: "A block of mass \\(m\\) rests on a frictionless incline at angle \\(\\theta\\). Resolve the weight along and perpendicular to the slope and find the acceleration down the slope.",
        sol: "<p>Component along slope (down): \\(W_\\parallel = mg\\sin\\theta\\).</p><p>Component perpendicular: \\(W_\\perp = mg\\cos\\theta\\), balanced by normal reaction \\(N\\).</p><p>Net force along slope: \\(F = mg\\sin\\theta\\), so acceleration:</p><p>\\[ a = \\frac{F}{m} = g\\sin\\theta. \\]</p>" },
      { q: "Same block as Q1, but with kinetic friction coefficient \\(\\mu_k\\). Find the acceleration down the slope.",
        sol: "<p>Normal force \\(N = mg\\cos\\theta\\); friction \\(f = \\mu_k N = \\mu_k mg\\cos\\theta\\) acting up the slope.</p><p>Newton's 2nd law along slope:</p><p>\\[ ma = mg\\sin\\theta - \\mu_k mg\\cos\\theta \\Rightarrow a = g(\\sin\\theta - \\mu_k\\cos\\theta). \\]</p><p>If \\(\\sin\\theta < \\mu_k\\cos\\theta\\) (i.e. \\(\\tan\\theta<\\mu_s\\)) the block doesn't move.</p>" },
      { q: "A 2.0 kg block on a \\(30^\\circ\\) incline experiences a friction force of \\(4.0\\,\\text{N}\\) when sliding down. Find the acceleration. (\\(g=9.81\\)).",
        sol: "<p>Force down the slope: \\( mg\\sin30^\\circ = 2.0(9.81)(0.5) = 9.81\\,\\text{N}\\).</p><p>Net force: \\(9.81 - 4.0 = 5.81\\,\\text{N}\\). Acceleration:</p><p>\\[ a = \\frac{5.81}{2.0} = 2.91\\,\\text{m s}^{-2}\\ \\text{down the slope}. \\]</p>" },
      { q: "Find the angle \\(\\theta\\) at which a block just begins to slide, given coefficient of static friction \\(\\mu_s = 0.30\\).",
        sol: "<p>At the limiting angle \\(\\tan\\theta = \\mu_s\\):</p><p>\\[ \\theta = \\arctan(0.30) \\approx 16.7^\\circ. \\]</p><p>For \\(\\theta\\) below this, static friction is sufficient to hold the block; above this the block accelerates down the plane.</p>" },
      { q: "Why does a heavy box and a light box, made of the same material, begin to slide at the <b>same</b> angle on an incline?",
        sol: "<p>The condition for sliding is \\(\\tan\\theta = \\mu_s\\). The mass cancels: both \\(mg\\sin\\theta\\) (driving force) and \\(\\mu_s mg\\cos\\theta\\) (max static friction) scale with \\(m\\). The critical angle depends only on the surface materials, not the mass of the object.</p>" },
    ],
    zh: [
      { q: "質量 \\(m\\) 的物塊置於無摩擦、傾角 \\(\\theta\\) 的斜面。將重力分解後求沿斜面向下的加速度。",
        sol: "<p>沿斜面分量 \\(mg\\sin\\theta\\)，垂直分量 \\(mg\\cos\\theta\\) 由法向力平衡。</p><p>\\[ a = g\\sin\\theta. \\]</p>" },
      { q: "同上題，但動摩擦系數為 \\(\\mu_k\\)。求加速度。",
        sol: "<p>摩擦力 \\(f = \\mu_k mg\\cos\\theta\\) 向上：</p><p>\\[ a = g(\\sin\\theta - \\mu_k\\cos\\theta). \\]</p><p>若 \\(\\tan\\theta<\\mu_s\\) 則不動。</p>" },
      { q: "2.0 kg 物塊置於 \\(30^\\circ\\) 斜面，下滑時摩擦力 \\(4.0\\,\\text{N}\\)。求加速度（\\(g=9.81\\)）。",
        sol: "<p>沿斜下分量 \\( mg\\sin30^\\circ = 9.81\\,\\text{N}\\)；合力 \\(9.81-4.0=5.81\\,\\text{N}\\)。</p><p>\\[ a = \\frac{5.81}{2.0} = 2.91\\,\\text{m s}^{-2}\\,\\text{沿斜面向下}. \\]</p>" },
      { q: "若靜摩擦系數 \\(\\mu_s=0.30\\)，物塊剛開始滑動時的傾角為何？",
        sol: "<p>\\(\\tan\\theta = \\mu_s \\Rightarrow \\theta = \\arctan(0.30) \\approx 16.7^\\circ\\)。</p><p>低於此角靜摩擦足以撐住物塊；高於則加速下滑。</p>" },
      { q: "同種材質的重箱與輕箱在同一斜面上，為何在<b>相同</b>角度時開始滑動？",
        sol: "<p>滑動條件 \\(\\tan\\theta=\\mu_s\\) 與質量無關：驅動力 \\(mg\\sin\\theta\\) 與最大靜摩擦 \\(\\mu_s mg\\cos\\theta\\) 同隨 \\(m\\) 增減，臨界角只取決於接觸面材質。</p>" },
    ],
  };

  B.work_energy_power = {
    en: [
      { q: "A horizontal force of \\(20\\,\\text{N}\\) pulls a box \\(5.0\\,\\text{m}\\) along a level floor. Calculate the work done.",
        sol: "<p>\\( W = Fs\\cos\\theta\\). For a horizontal pull on horizontal motion, \\(\\theta=0\\):</p><p>\\[ W = 20(5.0)(1) = 100\\,\\text{J}. \\]</p>" },
      { q: "A 50 kg crate is pushed up a smooth incline of \\(30^\\circ\\) for a distance of \\(4.0\\,\\text{m}\\) along the slope. Find the gain in gravitational PE.",
        sol: "<p>Vertical rise \\(h = 4.0\\sin30^\\circ = 2.0\\,\\text{m}\\):</p><p>\\[ \\Delta\\text{PE} = mgh = 50(9.81)(2.0) = 981\\,\\text{J}. \\]</p>" },
      { q: "A car of mass 1200 kg accelerates from \\(10\\,\\text{m s}^{-1}\\) to \\(25\\,\\text{m s}^{-1}\\). Find the change in kinetic energy and the average power if this takes \\(8.0\\,\\text{s}\\).",
        sol: "<p>\\(\\Delta\\text{KE} = \\tfrac12 m(v^2 - u^2) = \\tfrac12(1200)(625 - 100) = 3.15\\times10^5\\,\\text{J}.\\)</p><p>Average power: \\( P = \\Delta E/\\Delta t = 3.15\\times10^5/8.0 \\approx 3.94\\times10^4\\,\\text{W} \\approx 39\\,\\text{kW}.\\)</p>" },
      { q: "An electric motor lifts a \\(200\\,\\text{kg}\\) load \\(15\\,\\text{m}\\) in \\(20\\,\\text{s}\\). The motor draws \\(2.0\\,\\text{kW}\\) of electrical power. Find the efficiency.",
        sol: "<p>Useful work output: \\( W = mgh = 200(9.81)(15) = 2.94\\times10^4\\,\\text{J}.\\)</p><p>Useful output power: \\(P_\\text{out} = W/t = 2.94\\times10^4/20 = 1470\\,\\text{W}.\\)</p><p>Efficiency: \\(\\eta = P_\\text{out}/P_\\text{in} = 1470/2000 = 0.735 = 73.5\\%.\\)</p>" },
      { q: "A pendulum bob is released from rest at a height \\(h\\) above its lowest point. Use energy conservation to find the speed at the lowest point. Why is mass irrelevant?",
        sol: "<p>\\(\\text{PE}_\\text{lost} = \\text{KE}_\\text{gained}\\): \\( mgh = \\tfrac12 mv^2 \\Rightarrow v = \\sqrt{2gh}.\\)</p><p>The mass cancels, so all bobs (regardless of mass) released from the same height arrive at the bottom with the same speed (assuming negligible air resistance) — Galileo's classic insight.</p>" },
    ],
    zh: [
      { q: "20 N 水平力拉動箱子在地面前進 5.0 m。求所做的功。",
        sol: "<p>\\( W = Fs\\cos\\theta = 20(5.0)(1) = 100\\,\\text{J}.\\)</p>" },
      { q: "50 kg 木箱沿傾角 \\(30^\\circ\\) 平滑斜面上推 4.0 m。求重力勢能增量。",
        sol: "<p>豎直升高 \\(h = 4.0\\sin30^\\circ = 2.0\\,\\text{m}\\)：</p><p>\\[ \\Delta\\text{PE} = mgh = 981\\,\\text{J}. \\]</p>" },
      { q: "1200 kg 汽車由 10 至 25 m s\\(^{-1}\\) 加速用時 8.0 s。求動能變化及平均功率。",
        sol: "<p>\\(\\Delta\\text{KE} = \\tfrac12(1200)(625-100) = 3.15\\times10^5\\,\\text{J}.\\)</p><p>\\( P = 3.15\\times10^5/8.0 \\approx 39\\,\\text{kW}.\\)</p>" },
      { q: "電動機在 20 s 內把 200 kg 物升高 15 m，輸入功率 2.0 kW。求效率。",
        sol: "<p>有用功 \\( W = mgh = 2.94\\times10^4\\,\\text{J}\\)；有用功率 \\( P_\\text{out} = 1470\\,\\text{W}\\)。</p><p>\\(\\eta = 1470/2000 = 73.5\\%.\\)</p>" },
      { q: "擺錘由高 \\(h\\) 處靜止釋放。用能量守恆求其在最低點的速率。為何與質量無關？",
        sol: "<p>\\( mgh = \\tfrac12 mv^2 \\Rightarrow v = \\sqrt{2gh}.\\) 質量相消，故同高度釋放的物體（忽略空氣阻力）到達最低點速率相同——伽利略之發現。</p>" },
    ],
  };

  B.impulse_force_time = {
    en: [
      { q: "Define impulse and state its relationship with momentum.",
        sol: "<p>Impulse \\( \\vec J\\) is the time-integral of force: \\( \\vec J = \\int \\vec F\\,dt\\). For a constant force, \\(\\vec J = \\vec F\\,\\Delta t\\). It equals the change in momentum:</p><p>\\[ \\vec J = \\Delta \\vec p = m\\vec v_f - m\\vec v_i. \\]</p><p>SI unit: \\(\\text{N s} = \\text{kg m s}^{-1}\\).</p>" },
      { q: "A 0.40 kg ball moving at \\(8.0\\,\\text{m s}^{-1}\\) bounces off a wall and returns at \\(6.0\\,\\text{m s}^{-1}\\). Find the impulse on the ball.",
        sol: "<p>Take the initial direction as positive: \\(u = +8.0\\), \\(v = -6.0\\,\\text{m s}^{-1}\\).</p><p>\\[ J = \\Delta p = m(v - u) = 0.40(-6.0 - 8.0) = -5.6\\,\\text{N s}. \\]</p><p>The impulse is \\(5.6\\,\\text{N s}\\) directed away from the wall.</p>" },
      { q: "A force-time graph is triangular: it rises linearly from 0 to \\(40\\,\\text{N}\\) in \\(0.10\\,\\text{s}\\) then falls linearly back to 0 in another \\(0.10\\,\\text{s}\\). Find the impulse.",
        sol: "<p>Impulse = area under the F–t graph = area of triangle = \\(\\tfrac12 \\times \\text{base} \\times \\text{height}\\):</p><p>\\[ J = \\tfrac12(0.20)(40) = 4.0\\,\\text{N s}. \\]</p>" },
      { q: "When catching a fast cricket ball, why does a player pull their hands backwards?",
        sol: "<p>The change in momentum \\(\\Delta p\\) is fixed by the ball's mass and velocity. By extending the catching time \\(\\Delta t\\), the average force \\(\\bar F = \\Delta p/\\Delta t\\) on the hands is reduced — making the catch less painful and less likely to cause injury. The same impulse is delivered, but spread over a longer interval.</p>" },
      { q: "A 1500 kg car travelling at \\(20\\,\\text{m s}^{-1}\\) crashes and comes to rest. With a crumple zone the collision lasts \\(0.50\\,\\text{s}\\); without one it lasts \\(0.05\\,\\text{s}\\). Compare the average forces on the car.",
        sol: "<p>\\(\\Delta p = m\\Delta v = 1500(20) = 3.0\\times10^4\\,\\text{kg m s}^{-1}.\\)</p><p>With crumple zone: \\(\\bar F = 3.0\\times10^4/0.50 = 6.0\\times10^4\\,\\text{N}\\).</p><p>Without: \\(\\bar F = 3.0\\times10^4/0.05 = 6.0\\times10^5\\,\\text{N}\\) — ten times larger. Crumple zones reduce force on occupants by lengthening the collision.</p>" },
    ],
    zh: [
      { q: "定義衝量並說明其與動量的關係。",
        sol: "<p>衝量 \\( \\vec J = \\int \\vec F\\,dt\\)；恆力時 \\(\\vec J = \\vec F\\Delta t\\)，等於動量變化：</p><p>\\[ \\vec J = \\Delta \\vec p = m\\vec v_f - m\\vec v_i. \\]</p><p>單位：\\(\\text{N s}\\)。</p>" },
      { q: "0.40 kg 球以 \\(8.0\\,\\text{m s}^{-1}\\) 撞牆後反彈為 \\(6.0\\,\\text{m s}^{-1}\\)。求所受衝量。",
        sol: "<p>取入射方向為正：\\(u=+8.0\\)、\\(v=-6.0\\)。</p><p>\\[ J = m(v-u) = 0.40(-14.0) = -5.6\\,\\text{N s}. \\]</p><p>方向背離牆。</p>" },
      { q: "F-t 圖為三角形：0.10 s 內由 0 線性升至 40 N，再 0.10 s 線性降回 0。求衝量。",
        sol: "<p>衝量 = F-t 曲線下面積 = \\(\\tfrac12 \\times 0.20 \\times 40 = 4.0\\,\\text{N s}\\)。</p>" },
      { q: "接快速板球時，為何要把雙手向後縮？",
        sol: "<p>動量變化 \\(\\Delta p\\) 固定。延長接球時間 \\(\\Delta t\\) 可降低平均力 \\(\\bar F = \\Delta p/\\Delta t\\)，避免受傷。</p>" },
      { q: "1500 kg 汽車以 \\(20\\,\\text{m s}^{-1}\\) 撞至靜止。有潰縮區時碰撞時間 0.50 s；無潰縮區則 0.05 s。比較平均作用力。",
        sol: "<p>\\(\\Delta p = 3.0\\times10^4\\,\\text{kg m s}^{-1}\\)。</p><p>有：\\(\\bar F = 6.0\\times10^4\\,\\text{N}\\)；無：\\(6.0\\times10^5\\,\\text{N}\\)，相差 10 倍。潰縮區延長碰撞時間，可大幅減低乘員受力。</p>" },
    ],
  };

  /* ===== WAVES ============================================================= */

  B.standing_waves = {
    en: [
      { q: "Explain how a standing wave is formed on a string fixed at both ends.",
        sol: "<p>Two travelling waves of equal frequency, wavelength and amplitude move in opposite directions along the string (the wave from the source and its reflection from the fixed end). Their superposition gives points (<b>nodes</b>) where the two waves always cancel and points (<b>antinodes</b>) where they always reinforce, producing a pattern that does not appear to travel.</p>" },
      { q: "For a string of length \\(L\\) fixed at both ends, derive the formula for the resonant frequencies.",
        sol: "<p>Boundary condition: nodes at both ends, so allowed wavelengths satisfy \\(L = n(\\lambda_n/2)\\), giving \\(\\lambda_n = 2L/n\\).</p><p>With wave speed \\(v\\):</p><p>\\[ f_n = \\frac{v}{\\lambda_n} = \\frac{nv}{2L}, \\quad n = 1, 2, 3, \\ldots \\]</p><p>\\(f_1 = v/(2L)\\) is the fundamental; higher \\(n\\) are overtones (harmonics).</p>" },
      { q: "A guitar string of length 0.65 m vibrates at a fundamental frequency of \\(220\\,\\text{Hz}\\). Calculate the wave speed on the string.",
        sol: "<p>For the fundamental: \\(\\lambda_1 = 2L = 1.30\\,\\text{m}\\):</p><p>\\[ v = f_1\\lambda_1 = 220 \\times 1.30 = 286\\,\\text{m s}^{-1}. \\]</p>" },
      { q: "An air column closed at one end and open at the other has length 0.50 m. The speed of sound is \\(340\\,\\text{m s}^{-1}\\). Find the lowest two resonant frequencies.",
        sol: "<p>Closed–open pipe: only odd harmonics. \\( f_n = nv/(4L)\\) for \\(n=1,3,5,\\ldots\\).</p><p>\\( f_1 = 340/(4 \\times 0.50) = 170\\,\\text{Hz}\\); next is \\( f_3 = 3f_1 = 510\\,\\text{Hz}\\).</p>" },
      { q: "Why are the harmonics of a closed–open pipe limited to odd integer multiples of the fundamental?",
        sol: "<p>The closed end is a displacement <b>node</b>, the open end a displacement <b>antinode</b>. The minimum acceptable pattern fits <b>1/4 of a wavelength</b> in the pipe (\\(L = \\lambda/4\\)). Each successive resonance must add a half-wavelength, giving \\(L = (2n-1)\\lambda/4\\), i.e. \\(\\lambda_n = 4L/(2n-1)\\) and \\(f_n = (2n-1)v/(4L)\\) — only odd multiples of the fundamental.</p>" },
    ],
    zh: [
      { q: "解釋兩端固定弦上駐波的形成。",
        sol: "<p>兩列頻率、波長、振幅相同但方向相反的行波（入射波及其反射波）疊加。某些點（<b>節</b>）兩波永遠抵消、某些點（<b>腹</b>）永遠加強，形成不傳播的駐波圖樣。</p>" },
      { q: "兩端固定、長 \\(L\\) 的弦，導出共振頻率公式。",
        sol: "<p>邊界要求兩端為節：\\(L = n\\lambda_n/2\\)，故 \\(\\lambda_n = 2L/n\\)。</p><p>\\[ f_n = \\frac{nv}{2L}, \\quad n=1,2,3,\\ldots \\]</p><p>\\(f_1\\) 為基頻，其餘為諧頻。</p>" },
      { q: "0.65 m 吉他弦基頻 220 Hz，求弦上波速。",
        sol: "<p>\\(\\lambda_1 = 2L = 1.30\\,\\text{m}\\)；\\( v = f\\lambda = 220 \\times 1.30 = 286\\,\\text{m s}^{-1}\\)。</p>" },
      { q: "一端封閉、一端開口、長 0.50 m 的氣柱，聲速 340 m s\\(^{-1}\\)。求最低兩個共振頻率。",
        sol: "<p>閉開管只有奇諧頻：\\( f_n = nv/(4L)\\)，\\(n=1,3,\\ldots\\)。</p><p>\\(f_1 = 170\\,\\text{Hz}\\)，下一個為 \\(f_3 = 510\\,\\text{Hz}\\)。</p>" },
      { q: "為何閉開管的諧頻只能是基頻的奇數倍？",
        sol: "<p>閉端為位移<b>節</b>、開端為位移<b>腹</b>，最短允許駐波長度為 \\(\\lambda/4\\)，即 \\(L = (2n-1)\\lambda/4\\)，故 \\(f_n = (2n-1)v/(4L)\\)，僅奇數倍。</p>" },
    ],
  };

  /* ===== ELECTROMAGNETISM ================================================== */

  B.magnetic_field_visualizer = {
    en: [
      { q: "Define a magnetic field line and state two of its properties.",
        sol: "<p>A magnetic field line is an imaginary continuous line whose tangent at every point gives the direction of the magnetic field \\(\\vec B\\) (the direction in which a free N pole would be pushed).</p><ul class='list-disc pl-5'><li>Field lines emerge from N poles and enter S poles outside the magnet (forming closed loops inside).</li><li>Lines never cross (the field has a unique direction at every point).</li><li>Density of lines indicates the strength of the field.</li></ul>" },
      { q: "Sketch and describe the field pattern around a single bar magnet, and between two unlike poles facing each other.",
        sol: "<p><b>Single bar magnet:</b> field lines come out of the N pole and curve round to enter the S pole; closely spaced near the poles (strong field), spreading further away.</p><p><b>Unlike poles facing:</b> nearly straight lines from N to S between the poles, indicating a strong, nearly uniform field in the gap.</p><p>(For two like poles facing, the lines repel and a <b>neutral point</b> appears midway where the field is zero.)</p>" },
      { q: "What is a neutral point in a magnetic field, and where does one occur if the Earth's horizontal field combines with that of a bar magnet?",
        sol: "<p>A <b>neutral point</b> is a position where the resultant magnetic field is zero — two contributions of equal magnitude and opposite direction cancel. With a bar magnet aligned along the magnetic meridian: if the N pole points north, neutral points appear due east and west of the magnet (the magnet's field there is southwards, opposing Earth's northward field).</p>" },
      { q: "Why does a freely suspended magnetic compass align approximately along a north-south line on Earth?",
        sol: "<p>The Earth behaves as if it contains a giant bar magnet whose <b>magnetic south</b> pole lies near the geographic north (so the N pole of a compass is attracted northward). The horizontal component of Earth's field exerts a torque on the compass needle until it aligns parallel to the local field — approximately N-S, with a small <b>angle of declination</b> from true north.</p>" },
      { q: "How can you use iron filings (with a piece of paper) to map the magnetic field of a magnet?",
        sol: "<p>Place the magnet under a sheet of paper, sprinkle iron filings on top, then tap the paper gently. Each filing becomes a tiny induced magnet that aligns with the local field; tapping helps them rotate freely. The filings cluster along the field lines, revealing the pattern. Field strength can be inferred qualitatively from the density of filings.</p>" },
    ],
    zh: [
      { q: "定義磁感線並列舉其兩個性質。",
        sol: "<p>磁感線是一條假想曲線，其上各點切線方向即該處磁場 \\(\\vec B\\) 的方向（自由 N 極所受力方向）。</p><ul class='list-disc pl-5'><li>磁體外部由 N 出發、入 S。</li><li>絕不交叉。</li><li>密度代表磁場強度。</li></ul>" },
      { q: "描述單一條形磁鐵及兩異極相對時的磁場圖樣。",
        sol: "<p><b>單條形磁鐵：</b>磁感線由 N 出、繞回 S；極附近密集（場強），遠離稀疏。</p><p><b>異極相對：</b>兩極間磁感線近乎直線由 N 至 S，形成強而均勻的場。同極相對時則互斥，中間出現<b>中性點</b>。</p>" },
      { q: "甚麼是中性點？條形磁鐵置於地球磁場中，何處會出現中性點？",
        sol: "<p>中性點為合磁場為零之處（兩貢獻大小相等方向相反）。若條形磁鐵 N 極指北，中性點會出現於磁鐵的<b>正東及正西</b>，因該處磁鐵之場朝南，恰抵消地球水平場（朝北）。</p>" },
      { q: "為何自由懸掛的指南針大約指向南北？",
        sol: "<p>地球可視作含有巨型條形磁鐵，<b>磁南極</b>位於地理北附近，故指南針 N 端被吸向北。地磁水平分量產生力矩，使針旋轉至與當地磁場平行，方向約為南北，並與真北有小角度<b>磁偏角</b>。</p>" },
      { q: "如何利用鐵粉與紙描繪磁場？",
        sol: "<p>將紙覆於磁鐵上，撒鐵粉並輕敲。每顆鐵粉受感應變成小磁針，沿當地磁場方向排列，敲擊有助其轉動，最終沿磁感線聚集，鐵粉密度可定性反映場強。</p>" },
    ],
  };

  B.magnetic_effect_current = {
    en: [
      { q: "State the right-hand grip rule for the magnetic field around a long straight current-carrying wire.",
        sol: "<p>If the thumb of the right hand points in the direction of the conventional current, the curl of the fingers gives the direction of the magnetic field lines (concentric circles around the wire).</p>" },
      { q: "Calculate the magnetic field at \\(2.0\\,\\text{cm}\\) from a long straight wire carrying \\(5.0\\,\\text{A}\\). (\\(\\mu_0 = 4\\pi \\times 10^{-7}\\,\\text{T m A}^{-1}\\)).",
        sol: "<p>\\[ B = \\frac{\\mu_0 I}{2\\pi r} = \\frac{(4\\pi\\times10^{-7})(5.0)}{2\\pi (0.020)} = 5.0\\times10^{-5}\\,\\text{T}. \\]</p><p>(About the same magnitude as the Earth's field.)</p>" },
      { q: "A solenoid has \\(n = 2000\\) turns per metre and carries \\(I = 0.50\\,\\text{A}\\). Find the magnetic field at the centre.",
        sol: "<p>\\[ B = \\mu_0 n I = (4\\pi\\times10^{-7})(2000)(0.50) = 1.26\\times10^{-3}\\,\\text{T}. \\]</p>" },
      { q: "Compare the field patterns of (a) a flat circular coil and (b) a long solenoid carrying the same current.",
        sol: "<p><b>Flat coil:</b> field lines pass through the loop along its axis, looping back outside; non-uniform; field strongest at the centre of the loop.</p><p><b>Long solenoid:</b> nearly uniform, strong axial field inside (\\(B = \\mu_0 n I\\)); very weak field outside, similar to the field of a bar magnet (one end behaves like N, the other like S).</p>" },
      { q: "Two long parallel wires \\(0.10\\,\\text{m}\\) apart carry currents of \\(3.0\\,\\text{A}\\) in the <b>same</b> direction. Determine the force per unit length on each wire and whether it is attractive or repulsive.",
        sol: "<p>\\[ \\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d} = \\frac{(4\\pi\\times10^{-7})(3.0)(3.0)}{2\\pi(0.10)} = 1.8\\times10^{-5}\\,\\text{N m}^{-1}. \\]</p><p>Currents in the same direction → fields between the wires partially cancel and outside add, producing an <b>attractive</b> force.</p>" },
    ],
    zh: [
      { q: "說出長直載流導線磁場的右手定則。",
        sol: "<p>右手大拇指沿傳統電流方向，其餘四指彎曲方向即為磁感線方向（環繞導線的同心圓）。</p>" },
      { q: "求距載流 5.0 A 的長直導線 2.0 cm 處的磁場。",
        sol: "<p>\\[ B = \\frac{\\mu_0 I}{2\\pi r} = 5.0\\times10^{-5}\\,\\text{T}. \\]</p>" },
      { q: "螺線管每米 2000 匝、電流 0.50 A。求中心磁場。",
        sol: "<p>\\[ B = \\mu_0 n I = 1.26\\times10^{-3}\\,\\text{T}. \\]</p>" },
      { q: "比較 (a) 平面圓線圈與 (b) 長螺線管的磁場圖樣。",
        sol: "<p><b>圓線圈：</b>磁感線沿軸穿過線圈、外側回繞；不均勻，中心最強。</p><p><b>長螺線管：</b>內部接近均勻強場 \\(B=\\mu_0 nI\\)，外部弱、似條形磁鐵（兩端分別為 N、S）。</p>" },
      { q: "兩平行長導線相距 0.10 m，各通 3.0 A 同向電流。求每米所受力及性質。",
        sol: "<p>\\[ \\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d} = 1.8\\times10^{-5}\\,\\text{N m}^{-1}. \\]</p><p>同向 → 互相<b>吸引</b>。</p>" },
    ],
  };

  B.force_on_conductor = {
    en: [
      { q: "Write the formula for the force on a straight current-carrying conductor in a magnetic field, defining each symbol.",
        sol: "<p>\\[ F = BIL\\sin\\theta \\]</p><p>\\(B\\) = magnetic flux density (T); \\(I\\) = current (A); \\(L\\) = length of conductor in field (m); \\(\\theta\\) = angle between the conductor and \\(\\vec B\\). Force is greatest when \\(\\theta = 90^\\circ\\) and zero when the current is parallel to \\(\\vec B\\).</p>" },
      { q: "A 25 cm conductor carries \\(4.0\\,\\text{A}\\) perpendicular to a uniform field of \\(0.30\\,\\text{T}\\). Find the force on it.",
        sol: "<p>\\[ F = BIL = 0.30 \\times 4.0 \\times 0.25 = 0.30\\,\\text{N}. \\]</p><p>Direction is given by Fleming's left-hand rule.</p>" },
      { q: "State Fleming's left-hand rule and indicate which finger represents what quantity.",
        sol: "<p>Hold the thumb, first finger and second finger of the left hand mutually perpendicular:</p><ul class='list-disc pl-5'><li><b>F</b>irst finger → <b>F</b>ield (\\(\\vec B\\))</li><li>Se<b>C</b>ond finger → <b>C</b>urrent (\\(I\\))</li><li>Thu<b>M</b>b → <b>M</b>otion / Force (\\(\\vec F\\))</li></ul><p>This gives the force on a positive current. (Use the right hand for the force on a positive moving charge in vector cross-product form, or equivalently the left for conventional current.)</p>" },
      { q: "Find the force on a single proton (charge \\(+e\\)) moving at \\(2.0\\times10^{6}\\,\\text{m s}^{-1}\\) perpendicular to a \\(0.50\\,\\text{T}\\) field.",
        sol: "<p>\\[ F = qvB\\sin\\theta = (1.6\\times10^{-19})(2.0\\times10^{6})(0.50)(1) = 1.6\\times10^{-13}\\,\\text{N}. \\]</p><p>The force is perpendicular to both \\(\\vec v\\) and \\(\\vec B\\), causing circular motion.</p>" },
      { q: "Explain how a simple DC motor uses the force on a current-carrying coil to produce continuous rotation. Why is a commutator necessary?",
            sol: "<p>A coil placed in a magnetic field carries current; opposite sides of the coil experience equal and opposite forces (Fleming's left-hand rule), producing a torque that rotates the coil. After half a turn the coil's plane has reversed, so the force on each side would now act to rotate the coil <b>backwards</b>. The split-ring <b>commutator</b> reverses the current direction in the coil at this instant, so the torque continues to act in the same rotational sense — giving continuous one-way rotation.</p>" },
    ],
    zh: [
      { q: "寫出載流直導線於磁場中所受力的公式並解釋符號。",
        sol: "<p>\\[ F = BIL\\sin\\theta \\]</p><p>\\(B\\) 磁通密度、\\(I\\) 電流、\\(L\\) 導線長、\\(\\theta\\) 與磁場夾角。\\(\\theta=90^\\circ\\) 時最大，平行時為零。</p>" },
      { q: "25 cm 導線通 4.0 A，垂直於 0.30 T 磁場。求所受力。",
        sol: "<p>\\(F = BIL = 0.30 \\times 4.0 \\times 0.25 = 0.30\\,\\text{N}\\)，方向由左手定則決定。</p>" },
      { q: "說出 Fleming 左手定則及各指對應量。",
        sol: "<p>左手三指互相垂直：食指→<b>磁場</b>，中指→<b>電流</b>，姆指→<b>力</b>（運動方向）。適用於傳統電流。</p>" },
      { q: "質子（電量 \\(+e\\)）以 \\(2.0\\times10^6\\,\\text{m s}^{-1}\\) 垂直於 0.50 T 磁場運動，求所受力。",
        sol: "<p>\\(F = qvB = (1.6\\times10^{-19})(2.0\\times10^6)(0.50) = 1.6\\times10^{-13}\\,\\text{N}\\)。方向垂直於 \\(\\vec v\\) 及 \\(\\vec B\\)，作圓周運動。</p>" },
      { q: "解釋直流馬達如何持續旋轉？換向器的作用為何？",
        sol: "<p>線圈兩側受方向相反的力產生力矩使其轉動。半圈後若不換向，力矩會反向使線圈倒轉。<b>換向器</b>（半圓銅片）在每半圈的瞬間翻轉線圈內電流方向，令力矩方向不變，故能持續單向旋轉。</p>" },
    ],
  };

  B.motor_effect_3d = {
    en: [
      { q: "What is the motor effect?",
        sol: "<p>The <b>motor effect</b> is the phenomenon that a current-carrying conductor placed in a magnetic field experiences a force, given by \\(F = BIL\\sin\\theta\\), perpendicular to both the current and the field. This is the basic principle of all electric motors.</p>" },
      { q: "Use Fleming's left-hand rule to find the direction of force on a wire carrying current eastwards in a magnetic field pointing vertically downwards.",
        sol: "<p>Field (first finger): downwards. Current (second finger): east. Thumb (force): points <b>north</b>.</p><p>(Set up the left hand so that index finger points down, middle finger points east; the thumb naturally points north.)</p>" },
      { q: "List four ways to increase the force (and hence rotational speed/torque) on the coil of a simple DC motor.",
        sol: "<ol class='list-decimal pl-5 space-y-1'><li>Increase the current \\(I\\) through the coil.</li><li>Use a stronger magnet (larger \\(B\\)).</li><li>Increase the number of turns \\(N\\) on the coil — total force \\( F = NBIL\\).</li><li>Increase the area of the coil (longer arm \\(L\\) perpendicular to the field).</li></ol><p>(Adding a soft iron core also concentrates the field, raising \\(B\\) further.)</p>" },
      { q: "A rectangular coil 4 cm × 6 cm with 50 turns lies in a 0.20 T field, with its plane parallel to \\(\\vec B\\). A current of 2.0 A flows. Find the torque.",
        sol: "<p>The two sides of length \\(L = 0.06\\,\\text{m}\\) carry the relevant force; their separation is \\(d = 0.04\\,\\text{m}\\).</p><p>Force per side: \\(F = NBIL = 50(0.20)(2.0)(0.06) = 1.2\\,\\text{N}.\\) Torque \\(\\tau = Fd = 1.2(0.04) = 0.048\\,\\text{N m}\\).</p><p>Equivalently \\(\\tau = NBIA = 50(0.20)(2.0)(0.0024) = 0.048\\,\\text{N m}\\).</p>" },
      { q: "Why does the torque on a coil in a DC motor become zero when the plane of the coil is perpendicular to the magnetic field?",
        sol: "<p>The forces on the two sides of the coil are still equal and opposite, but they now act along the same line (along the field direction). They produce no perpendicular distance (moment arm), so the torque \\(\\tau = NBIA\\sin\\alpha\\) is zero (\\(\\alpha=0\\)). The coil overshoots through this position by inertia, then the commutator reverses the current to keep rotating in the same sense.</p>" },
    ],
    zh: [
      { q: "甚麼是馬達效應？",
        sol: "<p>載流導線置於磁場中所受力 \\(F=BIL\\sin\\theta\\) 的現象，方向垂直於電流與磁場。此為一切電動機的基本原理。</p>" },
      { q: "電流向東、磁場垂直向下，用 Fleming 左手定則求受力方向。",
        sol: "<p>食指向下、中指向東 → 拇指（力）指向<b>北</b>。</p>" },
      { q: "列出四種提高直流馬達線圈受力（即扭矩或轉速）的方法。",
        sol: "<ol class='list-decimal pl-5 space-y-1'><li>增大電流 \\(I\\)。</li><li>用更強磁鐵（增 \\(B\\)）。</li><li>增多匝數 \\(N\\)：\\(F = NBIL\\)。</li><li>增大線圈面積。</li></ol><p>（加軟鐵芯亦能集中磁場、增大 \\(B\\)。）</p>" },
      { q: "矩形線圈 4 cm × 6 cm、50 匝，置於 0.20 T 磁場（線圈面與 \\(\\vec B\\) 平行），通 2.0 A。求扭矩。",
        sol: "<p>每側受力 \\(F = NBIL = 50(0.20)(2.0)(0.06) = 1.2\\,\\text{N}\\)，臂長 0.04 m。</p><p>\\(\\tau = Fd = 0.048\\,\\text{N m}\\)。</p>" },
      { q: "當線圈平面垂直磁場時，為何扭矩為零？",
        sol: "<p>兩側仍受等大反向力，但作用線重合（同沿磁場方向），力臂為零，故 \\(\\tau = NBIA\\sin\\alpha = 0\\)。線圈靠慣性越過此位置，換向器隨即翻轉電流方向，使扭矩維持同向。</p>" },
    ],
  };

  B.current_balance = {
    en: [
      { q: "Describe the basic working principle of a current balance.",
        sol: "<p>A rigid horizontal conductor pivoted as a balance arm sits inside a magnetic field. When current flows, the conductor experiences a force \\(F = BIL\\) (motor effect) which tilts the balance. A known weight (or weights) is added on the opposite arm to restore equilibrium. From the lever law, the magnitude of the magnetic force can be calculated, and hence \\(B\\) (or \\(I\\) once the other is known) can be found.</p>" },
      { q: "On a current balance, a 5.0 cm conductor in a 0.20 T field carries an unknown current. Equilibrium is restored by placing a 1.0 g mass at the same distance from the pivot as the conductor. Find the current.",
        sol: "<p>Magnetic force = weight: \\(BIL = mg\\).</p><p>\\[ I = \\frac{mg}{BL} = \\frac{(1.0\\times10^{-3})(9.81)}{0.20 \\times 0.05} = 0.98\\,\\text{A}. \\]</p>" },
      { q: "Why must the conductor in a current balance be perpendicular to the magnetic field?",
        sol: "<p>The force on the conductor is \\(F = BIL\\sin\\theta\\). Maximum and well-defined force requires \\(\\theta = 90^\\circ\\). Any tilt reduces \\(F\\) by \\(\\sin\\theta\\) and introduces a longitudinal component along the conductor that does not contribute to balancing torque, leading to systematic error.</p>" },
      { q: "On a current balance, doubling the current causes the masses needed to balance the rod to also double. Explain the relationship.",
        sol: "<p>The magnetic force is \\(F = BIL\\propto I\\). To restore the same lever balance, the gravitational force \\(mg\\) on the counter-weight must equal \\(F\\), so \\(m\\propto F\\propto I\\). Doubling \\(I\\) doubles the required mass — confirming \\(F\\) is linear in current and validating \\(F = BIL\\).</p>" },
      { q: "List two precautions you would take to obtain accurate readings with a current balance.",
        sol: "<ol class='list-decimal pl-5 space-y-1'><li>Ensure the conductor is exactly horizontal and perpendicular to the field; level the apparatus and check with a try-square.</li><li>Use small currents for short times to avoid heating the conductor (which changes resistance, current, and the conductor's length by thermal expansion).</li><li>Keep the rider/weights at the same horizontal distance from the pivot as the conductor for direct comparison.</li><li>Reverse the current and average to cancel zero-error of the pivot.</li></ol>" },
    ],
    zh: [
      { q: "描述電流天平的基本原理。",
        sol: "<p>一條剛性水平導線置於磁場中並樞接成天平臂。通電時導線受 \\(F = BIL\\) 之力（馬達效應）使天平傾斜。在另一臂加適當砝碼使其重新平衡，由槓桿原理可求磁力大小，進而求 \\(B\\) 或 \\(I\\)。</p>" },
      { q: "天平上 5.0 cm 導線置於 0.20 T 磁場中，加 1.0 g 砝碼（與導線同距樞點）方平衡。求電流。",
        sol: "<p>\\(BIL = mg \\Rightarrow I = \\dfrac{mg}{BL} = 0.98\\,\\text{A}\\)。</p>" },
      { q: "為何天平上的導線須垂直於磁場？",
        sol: "<p>\\(F = BIL\\sin\\theta\\) 在 \\(\\theta=90^\\circ\\) 時最大；任何傾斜會降低力，且產生不貢獻力矩的縱向分量，造成系統誤差。</p>" },
      { q: "若電流加倍，所需砝碼也加倍。為何？",
        sol: "<p>\\(F = BIL \\propto I\\)。平衡時 \\(mg = F\\)，故 \\(m \\propto I\\)，符合 \\(F\\) 與電流的線性關係。</p>" },
      { q: "列出兩個提高量度準確度的注意事項。",
        sol: "<ol class='list-decimal pl-5 space-y-1'><li>導線需水平、與磁場垂直，先以水平儀調平。</li><li>短時間使用小電流，免發熱影響電阻、電流及長度。</li><li>反轉電流取平均值以消除樞點零誤差。</li></ol>" },
    ],
  };

  B.lorentz_force = {
    en: [
      { q: "State the Lorentz force law for a charge \\(q\\) moving with velocity \\(\\vec v\\) in a magnetic field \\(\\vec B\\).",
        sol: "<p>\\[ \\vec F = q\\,\\vec v \\times \\vec B \\]</p><p>Magnitude: \\(F = qvB\\sin\\theta\\), where \\(\\theta\\) is the angle between \\(\\vec v\\) and \\(\\vec B\\). Direction is perpendicular to both \\(\\vec v\\) and \\(\\vec B\\), given by the right-hand rule for positive \\(q\\) (reverse for negative).</p>" },
      { q: "An electron travels at \\(3.0\\times10^{7}\\,\\text{m s}^{-1}\\) perpendicular to a magnetic field of \\(2.5\\times10^{-3}\\,\\text{T}\\). Find the radius of its circular path.",
        sol: "<p>The magnetic force provides the centripetal force: \\(qvB = mv^2/r\\), so</p><p>\\[ r = \\frac{mv}{qB} = \\frac{(9.11\\times10^{-31})(3.0\\times10^{7})}{(1.6\\times10^{-19})(2.5\\times10^{-3})} = 6.83\\times10^{-2}\\,\\text{m}\\approx 6.8\\,\\text{cm}. \\]</p>" },
      { q: "Why does the magnetic force never change the speed of a charged particle, only its direction?",
        sol: "<p>The Lorentz force \\(\\vec F = q\\vec v\\times\\vec B\\) is always perpendicular to \\(\\vec v\\). The work done is \\(W = \\vec F \\cdot \\vec v\\,dt = 0\\). Zero work ⇒ no change in kinetic energy, hence no change in speed; only the direction of motion changes, producing circular (or, with a parallel velocity component, helical) motion.</p>" },
      { q: "A conductor of length \\(L\\) on rails carries current \\(I\\) in a magnetic field \\(B\\). Show that the rate of work done by the magnetic force as the rod moves at speed \\(v\\) equals \\(BILv\\), and identify where this energy comes from.",
        sol: "<p>Force on the rod: \\(F = BIL\\). Power delivered to the rod's motion: \\(P = Fv = BILv\\).</p><p>By Faraday's law the moving rod also induces an emf \\(\\varepsilon = BLv\\) which opposes the driving emf (Lenz's law). The electrical power consumed against this back-emf is \\(\\varepsilon I = BLvI\\) — exactly the mechanical power gained. So the energy comes from the external source maintaining the current.</p>" },
      { q: "In a velocity selector, perpendicular electric and magnetic fields \\(E\\) and \\(B\\) act on charges. Derive the speed at which charges pass through undeflected.",
        sol: "<p>Setting electric and magnetic forces equal and opposite: \\(qE = qvB\\), giving</p><p>\\[ v = \\frac{E}{B}. \\]</p><p>Only particles with this speed travel undeflected; faster or slower particles are deflected and absorbed by slits — useful in mass spectrometry to select monoenergetic ions.</p>" },
    ],
    zh: [
      { q: "說出電荷 \\(q\\) 以 \\(\\vec v\\) 在磁場 \\(\\vec B\\) 中的勞侖茲力公式。",
        sol: "<p>\\[ \\vec F = q\\,\\vec v \\times \\vec B \\]</p><p>大小 \\(F = qvB\\sin\\theta\\)；方向垂直 \\(\\vec v\\) 與 \\(\\vec B\\)，正電荷依右手定則（負電荷反向）。</p>" },
      { q: "電子以 \\(3.0\\times10^7\\,\\text{m s}^{-1}\\) 垂直射入 \\(2.5\\times10^{-3}\\,\\text{T}\\) 的磁場。求圓軌道半徑。",
        sol: "<p>\\(qvB = mv^2/r \\Rightarrow r = mv/(qB) = 6.83\\,\\text{cm}\\)。</p>" },
      { q: "為何磁力永遠只改變帶電粒子的方向而不改變其速率？",
        sol: "<p>\\(\\vec F \\perp \\vec v\\) 故 \\(W = \\vec F \\cdot \\vec v\\,dt = 0\\)，無做功 ⇒ 動能不變、速率不變，只變方向，作圓周（或螺旋）運動。</p>" },
      { q: "長 \\(L\\) 導線在軌道上載流 \\(I\\)、置於磁場 \\(B\\)。證明導線以 \\(v\\) 移動時磁力做功率等於 \\(BILv\\)，並說明能量來源。",
        sol: "<p>力 \\(F=BIL\\)，功率 \\(P = Fv = BILv\\)。同時感應反電動勢 \\(\\varepsilon = BLv\\)；外源克服 \\(\\varepsilon\\) 所耗電功率 \\(\\varepsilon I = BLvI\\) 等於機械功率。能量來自維持電流的外電源。</p>" },
      { q: "速度選擇器中電場與磁場互相垂直，導出能直線通過的粒子速度。",
        sol: "<p>\\(qE = qvB \\Rightarrow v = E/B\\)。其他速度的粒子受力偏轉，被狹縫擋住，可選出單一速度離子。</p>" },
    ],
  };

  B.cro_wave = {
    en: [
      { q: "On a CRO trace, the time-base is set to \\(2\\,\\text{ms/div}\\) and one full sine wave occupies 5 divisions horizontally. Find the period and frequency.",
        sol: "<p>Period \\(T = 5 \\times 2\\,\\text{ms} = 10\\,\\text{ms} = 0.010\\,\\text{s}\\).</p><p>Frequency \\( f = 1/T = 1/0.010 = 100\\,\\text{Hz}.\\)</p>" },
      { q: "The Y-gain is set to \\(0.5\\,\\text{V/div}\\) and the trace's peak-to-peak height is 4 divisions. Find the peak voltage and the rms voltage.",
        sol: "<p>Peak-to-peak \\( V_{pp} = 4 \\times 0.5 = 2.0\\,\\text{V}\\). Peak \\(V_0 = V_{pp}/2 = 1.0\\,\\text{V}\\).</p><p>For a sinusoidal signal: \\( V_\\text{rms} = V_0/\\sqrt{2} = 1.0/1.414 \\approx 0.707\\,\\text{V}.\\)</p>" },
      { q: "Why is the rms value (rather than the peak value) used to specify mains AC voltage?",
        sol: "<p>The rms voltage is the DC voltage that would deliver the <b>same average power</b> to a resistor (\\(P = V_\\text{rms}^2/R\\)). It is the most useful single number for comparing AC with DC supplies and for safety/equipment ratings. The peak value (\\(\\sqrt2\\) times rms) is only relevant for insulation breakdown considerations.</p>" },
      { q: "How would the trace change if (a) only the Y-gain is doubled, (b) only the time-base period is halved?",
        sol: "<p>(a) Doubling Y-gain (V/div halved) makes the wave appear <b>twice as tall</b>; the actual signal is unchanged.</p><p>(b) Halving the time-base period per division makes the wave appear <b>twice as wide</b> horizontally — fewer cycles fit on screen — but the actual frequency is unchanged.</p>" },
      { q: "What does it mean if the CRO trace is a horizontal line at the centre, and what does it mean if it is a vertical line at the centre?",
        sol: "<p><b>Horizontal line:</b> the input signal is zero (or DC at 0 V); the time-base is sweeping but there is no vertical deflection.</p><p><b>Vertical line:</b> the time-base is switched off, but a varying input is producing vertical deflection — the spot moves up and down along the centre column producing a vertical line.</p>" },
    ],
    zh: [
      { q: "CRO 時基 \\(2\\,\\text{ms/div}\\)，一完整正弦波橫向佔 5 格。求週期及頻率。",
        sol: "<p>\\(T = 10\\,\\text{ms}\\)，\\(f = 100\\,\\text{Hz}\\)。</p>" },
      { q: "Y 增益 \\(0.5\\,\\text{V/div}\\)，波形峰至峰高度 4 格。求峰值電壓及均方根電壓。",
        sol: "<p>\\(V_{pp}=2.0\\,\\text{V}\\)，\\(V_0 = 1.0\\,\\text{V}\\)，\\(V_\\text{rms} = V_0/\\sqrt2 \\approx 0.707\\,\\text{V}\\)。</p>" },
      { q: "為何用均方根值而非峰值描述市電？",
        sol: "<p>均方根電壓代表能在電阻上產生<b>相同平均功率</b>的等效直流電壓 \\(P = V_\\text{rms}^2/R\\)，最便於比較交直流及制定設備規格。峰值僅與絕緣擊穿相關。</p>" },
      { q: "若 (a) Y 增益加倍、(b) 時基週期減半，波形如何變化？",
        sol: "<p>(a) 波形看似加倍高（信號不變）。</p><p>(b) 波形橫向加倍寬，畫面顯示週期增多但實際頻率不變。</p>" },
      { q: "若 CRO 出現水平線於中央、或垂直線於中央，分別代表甚麼？",
        sol: "<p><b>水平線：</b>無輸入信號（或 0 V 直流），時基正常掃描但無垂直偏轉。</p><p><b>垂直線：</b>時基關閉，但有變化中輸入信號使光點沿垂直中軸上下移動。</p>" },
    ],
  };

  B.dc_circuit_internal_resistance = {
    en: [
      { q: "Define <b>EMF</b> and <b>terminal voltage</b> of a cell, and write the relationship between them.",
        sol: "<p><b>EMF \\(\\varepsilon\\):</b> energy supplied by the cell per unit charge passing through it (J/C = V), measured by an ideal voltmeter when no current flows.</p><p><b>Terminal voltage \\(V\\):</b> potential difference across the cell's terminals when delivering current \\(I\\); equals the voltage across the external circuit.</p><p>\\[ V = \\varepsilon - Ir, \\]</p><p>where \\(r\\) is the internal resistance.</p>" },
      { q: "A cell of EMF \\(1.5\\,\\text{V}\\) and internal resistance \\(0.50\\,\\Omega\\) is connected to a \\(2.5\\,\\Omega\\) external resistor. Find the current and the terminal voltage.",
        sol: "<p>\\( I = \\dfrac{\\varepsilon}{R + r} = \\dfrac{1.5}{2.5 + 0.50} = 0.50\\,\\text{A}.\\)</p><p>\\( V = IR = 0.50(2.5) = 1.25\\,\\text{V}\\) (or \\(V = \\varepsilon - Ir = 1.5 - 0.25 = 1.25\\,\\text{V}\\)).</p>" },
      { q: "Show that the maximum power transferred to the load occurs when \\(R = r\\), and find that maximum power.",
        sol: "<p>Power: \\(P = I^2 R = \\varepsilon^2 R/(R+r)^2.\\) Setting \\(dP/dR = 0\\) gives \\(R = r\\).</p><p>At this matched condition: \\(P_\\max = \\varepsilon^2/(4r)\\). Half of the total power generated is dissipated in the internal resistance — efficiency is only 50%.</p>" },
      { q: "Two cells, each \\(1.5\\,\\text{V}\\) with \\(r = 0.30\\,\\Omega\\), are connected in series to a \\(4.4\\,\\Omega\\) bulb. Find the current and the power delivered to the bulb.",
        sol: "<p>Total EMF \\(=3.0\\,\\text{V}\\); total internal resistance \\(=0.60\\,\\Omega\\); total resistance \\(=4.4+0.60=5.0\\,\\Omega\\).</p><p>\\( I = 3.0/5.0 = 0.60\\,\\text{A}\\); \\( P = I^2 R = 0.36\\times 4.4 = 1.58\\,\\text{W}.\\)</p>" },
      { q: "A car battery has EMF 12 V and internal resistance \\(0.020\\,\\Omega\\). When the starter motor draws 200 A, what is the terminal voltage? Why do the headlights dim while the engine is being cranked?",
        sol: "<p>\\(V = \\varepsilon - Ir = 12 - 200(0.020) = 12 - 4.0 = 8.0\\,\\text{V}\\).</p><p>The headlights are powered by this terminal voltage. With the starter drawing a huge current, the \\(Ir\\) drop within the battery is large, so the voltage at the terminals (and thus across the headlights) falls — they dim until the engine starts and the starter current ceases.</p>" },
    ],
    zh: [
      { q: "定義電動勢與端電壓，並寫出兩者關係。",
        sol: "<p><b>EMF \\(\\varepsilon\\)：</b>電源每經過單位電量提供的能量（無電流時測得）。</p><p><b>端電壓 \\(V\\)：</b>有電流 \\(I\\) 時電池兩端的電位差。</p><p>\\(V = \\varepsilon - Ir\\)。</p>" },
      { q: "EMF 1.5 V、\\(r = 0.50\\,\\Omega\\) 之電池接 \\(2.5\\,\\Omega\\) 外電阻。求電流及端電壓。",
        sol: "<p>\\(I = 1.5/3.0 = 0.50\\,\\text{A}\\)；\\(V = IR = 1.25\\,\\text{V}\\)。</p>" },
      { q: "證明當 \\(R = r\\) 時負載功率最大，並求最大功率。",
        sol: "<p>\\(P = \\varepsilon^2 R/(R+r)^2\\)；令 \\(dP/dR=0\\) 得 \\(R=r\\)，最大功率 \\(\\varepsilon^2/(4r)\\)；效率 50%。</p>" },
      { q: "兩個 1.5 V、\\(r=0.30\\,\\Omega\\) 電池串聯接 4.4 Ω 燈泡。求電流及燈泡功率。",
        sol: "<p>總 EMF 3.0 V，總內阻 0.60 Ω，總電阻 5.0 Ω。\\(I=0.60\\,\\text{A}\\)；\\(P = I^2R = 1.58\\,\\text{W}\\)。</p>" },
      { q: "車用電池 EMF 12 V、\\(r=0.020\\,\\Omega\\)。啟動馬達拉 200 A 時端電壓多少？為何同時車頭燈會變暗？",
        sol: "<p>\\(V = 12 - 200(0.020) = 8.0\\,\\text{V}\\)。車頭燈接同一端電壓，啟動瞬間 \\(Ir\\) 降壓大，故燈光暗淡直至引擎發動。</p>" },
    ],
  };

  B.electrostatics_field = {
    en: [
      { q: "State Coulomb's law and write its formula in SI units.",
        sol: "<p>Two point charges \\(q_1, q_2\\) separated by distance \\(r\\) in vacuum exert on each other an electrostatic force directed along the line joining them:</p><p>\\[ F = \\frac{1}{4\\pi\\varepsilon_0}\\,\\frac{q_1 q_2}{r^2} = \\frac{kq_1q_2}{r^2}, \\]</p><p>with \\(k = 8.99\\times10^{9}\\,\\text{N m}^2\\,\\text{C}^{-2}\\). Like charges repel; unlike charges attract.</p>" },
      { q: "Find the electric field at a point \\(0.10\\,\\text{m}\\) from a point charge of \\(+2.0\\,\\mu\\text{C}\\), and the force on a \\(+5.0\\,\\text{nC}\\) test charge placed there.",
        sol: "<p>\\( E = kQ/r^2 = (8.99\\times10^9)(2.0\\times10^{-6})/(0.10)^2 = 1.80\\times10^{6}\\,\\text{N C}^{-1}\\) (radially outward).</p><p>Force: \\( F = qE = (5.0\\times10^{-9})(1.80\\times10^{6}) = 9.0\\times10^{-3}\\,\\text{N}\\), away from the source charge.</p>" },
      { q: "Two charges \\(+3\\,\\mu\\text{C}\\) and \\(-3\\,\\mu\\text{C}\\) are separated by \\(0.20\\,\\text{m}\\). Find the electric field magnitude at the midpoint.",
        sol: "<p>At the midpoint each charge is \\(0.10\\,\\text{m}\\) away. Both fields point in the same direction (from + towards −), so they add:</p><p>\\[ E = 2\\,\\frac{kQ}{r^2} = 2\\,\\frac{(8.99\\times10^9)(3\\times10^{-6})}{(0.10)^2} = 5.4\\times10^{6}\\,\\text{N C}^{-1}. \\]</p>" },
      { q: "Sketch (describe) the electric field pattern between two equal and opposite point charges (an electric dipole).",
        sol: "<p>Field lines emerge from the positive charge and end on the negative one. Between the charges, the lines curve from + to − along smooth arcs, becoming nearly straight close to the line joining the charges. Far from the dipole the field weakens rapidly (\\(\\propto 1/r^3\\)). Lines never cross; the density of lines reflects field strength.</p>" },
      { q: "Why does a charged balloon stick to a neutral wall?",
        sol: "<p>The charged balloon (say negatively) <b>polarises</b> the molecules in the wall: their electrons are pushed slightly away from the balloon, leaving a thin positive layer on the wall surface nearer to the balloon. The attractive force between the balloon's negative charge and the wall's induced positive surface charge is greater than the repulsion to the more distant electrons, giving a net attraction strong enough to hold the balloon against gravity.</p>" },
    ],
    zh: [
      { q: "說出庫侖定律並寫出 SI 單位下的公式。",
        sol: "<p>兩點電荷 \\(q_1, q_2\\) 距 \\(r\\)：</p><p>\\[ F = \\frac{kq_1q_2}{r^2}, \\quad k = 8.99\\times10^9\\,\\text{N m}^2\\text{C}^{-2}. \\]</p><p>同號排斥、異號吸引。</p>" },
      { q: "求 \\(+2.0\\,\\mu\\text{C}\\) 點電荷距離 0.10 m 處的電場，並計算 \\(+5.0\\,\\text{nC}\\) 試驗電荷所受力。",
        sol: "<p>\\(E = kQ/r^2 = 1.80\\times10^6\\,\\text{N C}^{-1}\\)（徑向向外）。\\(F = qE = 9.0\\times10^{-3}\\,\\text{N}\\)（背離源電荷）。</p>" },
      { q: "兩 \\(\\pm3\\,\\mu\\text{C}\\) 點電荷相距 0.20 m。求兩者中點的電場大小。",
        sol: "<p>兩貢獻同向（由 + 指向 −），相加：\\(E = 2kQ/r^2 = 5.4\\times10^6\\,\\text{N C}^{-1}\\)。</p>" },
      { q: "描述電偶極（兩等量異號電荷）的電場線圖樣。",
        sol: "<p>由正電荷出發、終於負電荷；中間沿光滑弧線連接，越靠近兩電荷連線越接近直線；遠處迅速減弱（\\(\\propto 1/r^3\\)）。</p>" },
      { q: "為何帶電氣球會貼在中性牆上？",
        sol: "<p>氣球使牆面分子<b>極化</b>：電子被推離氣球，靠近氣球之表面變正。氣球（負）與感應正面距離較近，吸引力大於與遠端電子的斥力，淨吸引力足以克服重力。</p>" },
    ],
  };

  B.transformer_power = {
    en: [
      { q: "State the turns-ratio equation for an ideal transformer and the corresponding current relation.",
        sol: "<p>For an ideal (lossless) transformer with primary turns \\(N_p\\) and secondary turns \\(N_s\\):</p><p>\\[ \\frac{V_s}{V_p} = \\frac{N_s}{N_p}, \\qquad \\frac{I_s}{I_p} = \\frac{N_p}{N_s}. \\]</p><p>(Conservation of power: \\(V_p I_p = V_s I_s\\).)</p>" },
      { q: "A transformer steps 240 V mains down to 12 V. The primary has 1000 turns. Find (a) the number of secondary turns and (b) the primary current when the secondary delivers 2.0 A (assume ideal).",
        sol: "<p>(a) \\( N_s = N_p (V_s/V_p) = 1000\\times 12/240 = 50\\) turns.</p><p>(b) \\( I_p = I_s (V_s/V_p) = 2.0\\times 12/240 = 0.10\\,\\text{A}.\\)</p>" },
      { q: "Why is electrical power transmitted at very high voltages over long distances?",
        sol: "<p>For a fixed power \\(P = VI\\), increasing \\(V\\) reduces \\(I\\). Power lost in the transmission cables is \\(P_\\text{loss} = I^2 R\\) — quadratic in current — so even a modest voltage step-up dramatically reduces resistive losses. The high voltage is then stepped down (with another transformer) to safe values for domestic use.</p>" },
      { q: "A power station generates 500 kW of electricity. The transmission line has a total resistance of \\(2.0\\,\\Omega\\). Compare the power lost when transmitting at (a) 1000 V and (b) 100 000 V.",
        sol: "<p>(a) \\( I = P/V = 500{,}000/1000 = 500\\,\\text{A}\\); \\(P_\\text{loss} = I^2 R = 250{,}000(2.0) = 5.0\\times10^5\\,\\text{W}\\) — i.e. <b>all</b> the power is lost!</p><p>(b) \\( I = 5.0\\,\\text{A}\\); \\(P_\\text{loss} = 25(2.0) = 50\\,\\text{W}\\) — negligible (0.01%).</p><p>10 000-fold reduction in losses for a 100-fold voltage increase.</p>" },
      { q: "List two reasons why a real transformer is not 100% efficient, and how each is reduced.",
        sol: "<ol class='list-decimal pl-5 space-y-1'><li><b>Resistance of windings</b> (copper losses, \\(I^2R\\)): use thicker copper wire of low resistance.</li><li><b>Eddy currents</b> in the iron core: laminate the core into thin insulated sheets to break eddy current loops.</li><li><b>Hysteresis losses</b> (energy used to remagnetise the core each cycle): use soft magnetic material (e.g. silicon steel) with a narrow B–H loop.</li><li><b>Flux leakage</b>: design a closed iron core so flux is shared by both coils.</li></ol>" },
    ],
    zh: [
      { q: "寫出理想變壓器的匝數比及對應電流關係。",
        sol: "<p>\\[ \\frac{V_s}{V_p} = \\frac{N_s}{N_p}, \\qquad \\frac{I_s}{I_p} = \\frac{N_p}{N_s}. \\]</p><p>由能量守恆 \\(V_p I_p = V_s I_s\\)。</p>" },
      { q: "變壓器將 240 V 降至 12 V，初級 1000 匝。求 (a) 次級匝數及 (b) 次級輸出 2.0 A 時的初級電流（理想）。",
        sol: "<p>(a) \\(N_s = 50\\)；(b) \\(I_p = 0.10\\,\\text{A}\\)。</p>" },
      { q: "為何長距離輸電要用高壓？",
        sol: "<p>定功率 \\(P=VI\\)，升壓即降電流。線路損耗 \\(P_\\text{loss}=I^2R\\) 與電流平方成正比，故升壓可大幅減損；末端再降壓至民用安全電壓。</p>" },
      { q: "發電廠發 500 kW，輸電線總阻 \\(2.0\\,\\Omega\\)。比較 (a) 1000 V 及 (b) 100 000 V 輸電時的線損。",
        sol: "<p>(a) \\(I=500\\,\\text{A}\\)，\\(P_\\text{loss}=5.0\\times10^5\\,\\text{W}\\)（全損！）。</p><p>(b) \\(I=5.0\\,\\text{A}\\)，\\(P_\\text{loss}=50\\,\\text{W}\\)（僅 0.01%）。電壓升 100 倍，損耗降 10 000 倍。</p>" },
      { q: "列出兩種變壓器非理想（效率低於 100%）的原因，及對應改善方法。",
        sol: "<ol class='list-decimal pl-5 space-y-1'><li><b>線阻熱耗</b>：用粗銅線。</li><li><b>渦流損耗</b>：鐵芯分薄絕緣片疊製。</li><li><b>磁滯損耗</b>：選窄磁滯回線軟磁材料（如矽鋼）。</li><li><b>磁通洩漏</b>：閉合鐵芯設計，使磁通幾乎全部穿過兩線圈。</li></ol>" },
    ],
  };

  B.domestic_electricity = {
    en: [
      { q: "Identify the live, neutral and earth wires in a UK-style 3-pin plug by colour and function.",
        sol: "<ul class='list-disc pl-5 space-y-1'><li><b>Live (L)</b> — brown, carries the alternating high voltage from the supply.</li><li><b>Neutral (N)</b> — blue, completes the circuit and is at near-earth potential.</li><li><b>Earth (E)</b> — green/yellow stripe, connects the appliance's metal casing to ground for safety so that any fault current trips the fuse/MCB and the case never carries dangerous voltage.</li></ul>" },
      { q: "Why is the fuse always placed in the live wire, never the neutral?",
        sol: "<p>If the fuse blows in the live wire, the appliance is completely disconnected from the dangerous high-voltage supply — its internal wiring becomes safe to touch. If the fuse were in the neutral, the appliance would still be at live potential after a blown fuse (current cannot flow but the chassis can still give a shock if touched while a person provides a path to earth).</p>" },
      { q: "An electric kettle is rated \\(2200\\,\\text{W}\\) at \\(220\\,\\text{V}\\). Choose an appropriate fuse rating from {3 A, 5 A, 13 A} and explain.",
        sol: "<p>Operating current: \\( I = P/V = 2200/220 = 10\\,\\text{A}\\).</p><p>Choose the smallest fuse rating that exceeds the normal current — <b>13 A</b>. A 5 A or 3 A fuse would blow under normal use; choosing 13 A still gives protection if the current rises substantially above 10 A due to a fault.</p>" },
      { q: "Explain how an earth wire combined with a fuse protects the user when a fault inside an appliance connects the live wire to its metal casing.",
        sol: "<p>If the live wire touches the metal casing, the earth wire provides a low-resistance path to ground, causing a very large current (often hundreds of amps) to flow instantly. This large current melts the fuse (or trips the MCB) and disconnects the live supply within milliseconds. The casing is thus quickly returned to safe earth potential and the user is protected from electric shock.</p>" },
      { q: "Compare a fuse and a miniature circuit breaker (MCB) — give two advantages of an MCB.",
        sol: "<p>Both protect against over-current.</p><ul class='list-disc pl-5 space-y-1'><li>An MCB is <b>resettable</b> (just flick the switch back) — no need to replace.</li><li>An MCB usually trips <b>faster</b> than a fuse for the same over-current.</li><li>An MCB has a more precise tripping current and is less prone to slow degradation.</li></ul><p>(A drawback: MCBs are more expensive and bulkier than a simple fuse.)</p>" },
    ],
    zh: [
      { q: "說出英式三腳插頭的火線、中性線、地線的顏色及功能。",
        sol: "<ul class='list-disc pl-5 space-y-1'><li><b>火線 L</b>：棕色，攜帶供電的交流高壓。</li><li><b>中性線 N</b>：藍色，與大地電位接近。</li><li><b>地線 E</b>：黃綠相間，將電器金屬外殼接地，使故障時電流經地線流走、保險絲熔斷，外殼永不帶險壓。</li></ul>" },
      { q: "為何保險絲必須裝在火線而非中性線？",
        sol: "<p>火線斷開後電器與高壓完全脫離，內部變得安全。若裝在中性線，即使保險絲熔斷，電器仍與火線連接，外殼可能仍帶電而觸電。</p>" },
      { q: "電熱水壺額定 2200 W、220 V。從 {3 A, 5 A, 13 A} 中選合適保險絲並說明。",
        sol: "<p>正常電流 \\(I = P/V = 10\\,\\text{A}\\)。應選略大於工作電流者 → <b>13 A</b>。3 A 或 5 A 在正常使用即會熔斷。</p>" },
      { q: "解釋地線與保險絲如何在火線碰外殼故障時保護使用者。",
        sol: "<p>火線觸及金屬外殼時，地線提供低電阻路徑使極大電流即時流向大地，瞬間熔斷保險絲（或跳脫 MCB），切斷供電；外殼於毫秒內回到安全地電位，使用者免於觸電。</p>" },
      { q: "比較保險絲與微型斷路器 (MCB)，列出 MCB 的兩個優點。",
        sol: "<ul class='list-disc pl-5 space-y-1'><li>可重設，毋須更換。</li><li>跳脫速度通常更快。</li><li>跳脫電流更精確，不易隨時間漂移。</li></ul><p>（缺點：較貴、體積較大。）</p>" },
    ],
  };

  B.refraction_critical_angle = {
    en: [
      { q: "State Snell's law and define the refractive index \\(n\\).",
        sol: "<p>\\[ n_1\\sin\\theta_1 = n_2\\sin\\theta_2. \\]</p><p>Refractive index of a medium: \\(n = c/v\\), where \\(c\\) is the speed of light in vacuum and \\(v\\) is its speed in the medium. Higher \\(n\\) means slower light and greater bending towards the normal when entering from a less dense medium.</p>" },
      { q: "Light travels from air (\\(n=1.00\\)) into water (\\(n=1.33\\)) at an angle of incidence of \\(40^{\\circ}\\). Find the angle of refraction.",
        sol: "<p>\\[ \\sin\\theta_2 = \\frac{n_1}{n_2}\\sin\\theta_1 = \\frac{1.00}{1.33}\\sin 40^\\circ = 0.4833. \\]</p><p>\\(\\theta_2 = \\arcsin(0.4833) \\approx 28.9^\\circ\\) (bent towards the normal).</p>" },
      { q: "Define <b>critical angle</b> and derive the formula for it.",
        sol: "<p>The critical angle \\(\\theta_c\\) is the angle of incidence in the denser medium for which the refracted ray emerges along the boundary (\\(\\theta_2 = 90^\\circ\\)).</p><p>From Snell's law (going from medium \\(n_1\\) into less dense \\(n_2\\)): \\( n_1\\sin\\theta_c = n_2\\sin90^\\circ = n_2\\), so</p><p>\\[ \\sin\\theta_c = \\frac{n_2}{n_1}. \\]</p><p>For glass (\\(n=1.5\\)) to air: \\(\\theta_c = \\arcsin(1/1.5) \\approx 41.8^\\circ\\).</p>" },
      { q: "What is total internal reflection (TIR), and what conditions must be met?",
        sol: "<p><b>TIR:</b> When light travels from a denser to a less dense medium and the angle of incidence exceeds the critical angle, the light is entirely reflected back into the denser medium — no refracted ray emerges.</p><p><b>Conditions:</b></p><ul class='list-disc pl-5'><li>Light is moving from a denser to a less dense medium (\\(n_1 > n_2\\)).</li><li>Angle of incidence \\(\\theta > \\theta_c\\).</li></ul>" },
      { q: "List two practical applications of total internal reflection and explain briefly.",
        sol: "<ul class='list-disc pl-5 space-y-1'><li><b>Optical fibres:</b> Light is launched at an angle so that it always strikes the core–cladding interface above \\(\\theta_c\\), reflecting many times along the fibre with negligible loss — used in telecommunications and endoscopy.</li><li><b>Prismatic binoculars / periscopes:</b> Right-angle prisms reflect light at \\(45^\\circ\\) (greater than \\(\\theta_c\\) for glass–air \\(\\sim42^\\circ\\)) giving brighter, sharper images than silvered mirrors.</li><li><b>Cat's-eye road reflectors:</b> Use TIR inside glass spheres to bounce a car's headlights back to the driver.</li></ul>" },
    ],
    zh: [
      { q: "寫出 Snell 定律並定義折射率 \\(n\\)。",
        sol: "<p>\\(n_1\\sin\\theta_1 = n_2\\sin\\theta_2\\)。\\(n = c/v\\)（真空光速 ÷ 介質光速）。\\(n\\) 大者光速慢，由疏入密時偏向法線。</p>" },
      { q: "光從空氣（\\(n=1\\)）以 \\(40^\\circ\\) 入射水（\\(n=1.33\\)）。求折射角。",
        sol: "<p>\\(\\sin\\theta_2 = \\frac{1}{1.33}\\sin40^\\circ = 0.4833 \\Rightarrow \\theta_2 \\approx 28.9^\\circ\\)。</p>" },
      { q: "定義臨界角並導出公式。",
        sol: "<p>密介質內入射時折射角達 \\(90^\\circ\\) 的入射角。由 Snell：\\(\\sin\\theta_c = n_2/n_1\\)。如玻璃（1.5）到空氣：\\(\\theta_c \\approx 41.8^\\circ\\)。</p>" },
      { q: "甚麼是全內反射 (TIR)？條件為何？",
        sol: "<p>由密入疏介質且入射角 > \\(\\theta_c\\) 時光全部反射回密介質、無折射光。條件：(i) \\(n_1 > n_2\\)；(ii) \\(\\theta > \\theta_c\\)。</p>" },
      { q: "舉兩個 TIR 的實際應用並簡釋。",
        sol: "<ul class='list-disc pl-5 space-y-1'><li><b>光纖：</b>光以大於 \\(\\theta_c\\) 入射纖芯界面，多次全反射沿纖傳輸，損耗極低，用於通訊和內窺鏡。</li><li><b>稜鏡望遠鏡 / 潛望鏡：</b>直角玻璃稜鏡以 45° 反射光（大於玻璃-空氣 \\(\\theta_c\\)），影像比鏡面更亮銳。</li><li><b>路面反光釘：</b>玻璃珠內部 TIR 將車燈光反射回駕駛者。</li></ul>" },
    ],
  };

  /* ===== THERMAL =========================================================== */

  B.evaporation_boiling = {
    en: [
      { q: "List three differences between evaporation and boiling.",
        sol: "<table class='text-xs md:text-sm border border-slate-300 w-full'><tr class='bg-slate-100'><th class='border p-2'>Property</th><th class='border p-2'>Evaporation</th><th class='border p-2'>Boiling</th></tr><tr><td class='border p-2'>Temperature</td><td class='border p-2'>Any temperature</td><td class='border p-2'>Only at boiling point</td></tr><tr><td class='border p-2'>Where</td><td class='border p-2'>Liquid surface only</td><td class='border p-2'>Throughout the liquid</td></tr><tr><td class='border p-2'>Speed</td><td class='border p-2'>Slow, gradual</td><td class='border p-2'>Rapid; bubbles form</td></tr><tr><td class='border p-2'>Effect on temp</td><td class='border p-2'>Causes cooling</td><td class='border p-2'>Temp stays constant</td></tr></table>" },
      { q: "Explain in terms of molecular kinetic energy why evaporation cools a liquid.",
        sol: "<p>Molecules in a liquid have a range of kinetic energies. Only the most energetic molecules can escape the surface against intermolecular attractions. When they leave, the average kinetic energy of the remaining molecules <b>decreases</b>, and so does the temperature (since temperature is a measure of average translational KE).</p>" },
      { q: "List four factors that increase the rate of evaporation.",
        sol: "<ol class='list-decimal pl-5 space-y-1'><li>Higher temperature (more molecules have escape energy).</li><li>Larger surface area exposed.</li><li>Lower humidity (less re-condensation of vapour back into liquid).</li><li>A breeze or moving air over the surface (sweeps vapour away, lowering humidity locally).</li><li>(Lower air pressure also helps.)</li></ol>" },
      { q: "Why does sweating cool the human body more effectively in dry air than in humid air?",
        sol: "<p>Cooling depends on the rate at which sweat evaporates, taking latent heat from the skin. In humid air, the partial pressure of water vapour is already high, so re-condensation is significant and the net evaporation rate is slow. In dry air, vapour pressure is low and sweat evaporates rapidly, removing more heat per unit time and cooling the body more efficiently.</p>" },
      { q: "Why does the temperature of a pot of water remain constant at 100 °C while boiling, even though heat is still being supplied?",
        sol: "<p>The supplied heat is used to overcome intermolecular attractions and convert liquid molecules to vapour — i.e. it provides the <b>specific latent heat of vaporisation</b>. None of this energy raises the average kinetic energy of the molecules, so the temperature does not rise. Once all the water has boiled away, any further heat would raise the temperature of the steam.</p>" },
    ],
    zh: [
      { q: "列出蒸發與沸騰的三項分別。",
        sol: "<table class='text-xs md:text-sm border border-slate-300 w-full'><tr class='bg-slate-100'><th class='border p-2'>性質</th><th class='border p-2'>蒸發</th><th class='border p-2'>沸騰</th></tr><tr><td class='border p-2'>溫度</td><td class='border p-2'>任何溫度</td><td class='border p-2'>僅於沸點</td></tr><tr><td class='border p-2'>位置</td><td class='border p-2'>液面</td><td class='border p-2'>整個液體</td></tr><tr><td class='border p-2'>速率</td><td class='border p-2'>緩慢</td><td class='border p-2'>劇烈、有氣泡</td></tr><tr><td class='border p-2'>對溫度</td><td class='border p-2'>致冷</td><td class='border p-2'>溫度恆定</td></tr></table>" },
      { q: "以分子動能解釋蒸發為何使液體降溫。",
        sol: "<p>液體分子動能不一，只有最高能者能逃出表面。離開後剩餘分子平均動能<b>下降</b>，溫度因而降低。</p>" },
      { q: "列出四項加快蒸發的因素。",
        sol: "<ol class='list-decimal pl-5 space-y-1'><li>溫度升高。</li><li>表面積增大。</li><li>濕度降低。</li><li>有風（吹走蒸氣）。</li><li>（氣壓降低亦有幫助。）</li></ol>" },
      { q: "為何乾空氣中出汗散熱比濕空氣中有效？",
        sol: "<p>散熱依汗水蒸發速率而定。濕空氣水汽壓高，凝結回液體量大，淨蒸發慢。乾空氣中水汽壓低，蒸發快，每秒帶走更多潛熱，散熱效率高。</p>" },
      { q: "為何沸騰中的水雖持續加熱仍維持 100 °C？",
        sol: "<p>持續輸入的熱能用作克服分子間引力使液變氣，即提供<b>汽化潛熱</b>，並非提高分子動能，故溫度不升。待水全部蒸發後，續加熱才會提升水蒸汽溫度。</p>" },
    ],
  };

  B.gas_laws = {
    en: [
      { q: "State Boyle's law and explain it briefly using particle theory.",
        sol: "<p><b>Boyle's law:</b> For a fixed mass of gas at constant temperature, the pressure is inversely proportional to the volume:</p><p>\\[ pV = \\text{constant.} \\]</p><p><b>Particle picture:</b> Halving the volume puts twice as many molecules per unit volume. Each second, molecules strike a given area of wall twice as often, doubling the pressure.</p>" },
      { q: "A gas occupies \\(2.0\\,\\text{L}\\) at \\(100\\,\\text{kPa}\\). Calculate its volume when compressed isothermally to \\(250\\,\\text{kPa}\\).",
        sol: "<p>By Boyle's law \\( p_1 V_1 = p_2 V_2\\):</p><p>\\[ V_2 = \\frac{p_1 V_1}{p_2} = \\frac{(100)(2.0)}{250} = 0.80\\,\\text{L}. \\]</p>" },
      { q: "A gas at \\(27\\,^\\circ\\text{C}\\) is heated at constant pressure until its volume doubles. Find the new temperature in °C.",
        sol: "<p>Charles's law: \\(V/T = \\text{const}\\), with \\(T\\) in kelvin.</p><p>\\(T_1 = 27 + 273 = 300\\,\\text{K}\\). \\(T_2 = 2T_1 = 600\\,\\text{K} = 327\\,^\\circ\\text{C}\\).</p>" },
      { q: "An ideal gas obeys \\(pV = nRT\\). \\(2.0\\,\\text{mol}\\) of gas at \\(300\\,\\text{K}\\) occupies what volume at \\(1.0\\times10^{5}\\,\\text{Pa}\\)? (\\(R = 8.31\\,\\text{J K}^{-1}\\,\\text{mol}^{-1}\\)).",
        sol: "<p>\\[ V = \\frac{nRT}{p} = \\frac{(2.0)(8.31)(300)}{1.0\\times10^5} = 4.99\\times10^{-2}\\,\\text{m}^3 \\approx 49.9\\,\\text{L}. \\]</p>" },
      { q: "Why must absolute (Kelvin) temperature, not Celsius, be used in the gas laws?",
        sol: "<p>The gas laws (Charles, Gay-Lussac, ideal-gas equation) state that some property is proportional to <i>temperature</i>. The proportionality only works from a true zero — the temperature at which an ideal gas would have zero volume or pressure (\\(0\\,\\text{K} = -273.15\\,^\\circ\\text{C}\\)). Using °C would give wrong (and even negative) ratios; the Kelvin scale starts at this absolute zero so all values are positive and proportionality makes physical sense.</p>" },
    ],
    zh: [
      { q: "說出波意耳定律並用粒子理論簡釋。",
        sol: "<p><b>波意耳定律：</b>定量氣體於定溫，\\(pV = \\text{常數}\\)。</p><p>體積減半使每單位體積分子數加倍，撞擊器壁次數加倍，故壓力加倍。</p>" },
      { q: "氣體在 100 kPa 時佔 2.0 L，等溫壓縮至 250 kPa 後體積為何？",
        sol: "<p>\\(V_2 = p_1 V_1/p_2 = 0.80\\,\\text{L}\\)。</p>" },
      { q: "27 °C 氣體於定壓下加熱至體積加倍。求新溫度（°C）。",
        sol: "<p>查理定律 \\(V/T = \\text{常數}\\)，\\(T_1 = 300\\,\\text{K}\\)，\\(T_2 = 600\\,\\text{K} = 327\\,^\\circ\\text{C}\\)。</p>" },
      { q: "理想氣體 \\(pV = nRT\\)。2.0 mol、300 K、\\(1.0\\times10^5\\,\\text{Pa}\\) 時體積？",
        sol: "<p>\\(V = nRT/p = 4.99\\times10^{-2}\\,\\text{m}^3 \\approx 49.9\\,\\text{L}\\)。</p>" },
      { q: "為何氣體定律必須使用開氏溫度而非攝氏？",
        sol: "<p>氣體定律要求量值與「溫度」成比例。只有以絕對零度為起點的溫標（\\(0\\,\\text{K}=-273.15\\,^\\circ\\text{C}\\)）才能使比例成立；攝氏會得錯誤甚至負值。</p>" },
    ],
  };

  /* ===== ATOMIC & QUANTUM ================================================== */

  B.rutherford = {
    en: [
      { q: "Describe the basic setup of Rutherford's gold-foil scattering experiment.",
        sol: "<p>A narrow beam of \\(\\alpha\\)-particles from a radioactive source is directed at a very thin gold foil in vacuum. A movable zinc-sulfide screen (or modern detector) records the angles at which scattered \\(\\alpha\\)-particles arrive. By counting the number of particles deflected by various angles, the distribution of scattering angles is mapped.</p>" },
      { q: "Summarise the three key experimental observations and the conclusion Rutherford drew from each.",
        sol: "<ol class='list-decimal pl-5 space-y-1'><li>Most \\(\\alpha\\)-particles passed straight through with little deflection ⇒ the atom is mostly <b>empty space</b>.</li><li>A small fraction were deflected through large angles ⇒ a concentrated <b>positive charge</b> existed in the atom.</li><li>A very few (about 1 in 8 000) were scattered straight back ⇒ this charge is concentrated in a <b>tiny, massive nucleus</b>.</li></ol>" },
      { q: "Why was the result \"some α-particles bouncing straight back\" so surprising under Thomson's plum-pudding model?",
        sol: "<p>In the plum-pudding model, positive charge was spread throughout the atom and electrons were embedded in it. The electric field anywhere inside such a uniform distribution would be far too weak to reverse a fast \\(\\alpha\\)-particle. Rutherford himself said it was as if a 15-inch shell had bounced back from a piece of tissue paper.</p>" },
      { q: "Estimate the closest distance of approach for an \\(\\alpha\\)-particle of kinetic energy \\(5.0\\,\\text{MeV}\\) fired head-on at a gold nucleus (\\(Z = 79\\)).",
        sol: "<p>At closest approach all KE → electrostatic PE: \\( \\text{KE} = kZ(2e)e/r\\).</p><p>Convert: \\(5.0\\,\\text{MeV} = 5.0\\times10^6 \\times 1.6\\times10^{-19} = 8.0\\times10^{-13}\\,\\text{J}\\).</p><p>\\[ r = \\frac{k(2e)(Ze)}{\\text{KE}} = \\frac{(8.99\\times10^9)(2)(79)(1.6\\times10^{-19})^2}{8.0\\times10^{-13}} \\approx 4.5\\times10^{-14}\\,\\text{m}. \\]</p><p>About \\(45\\,\\text{fm}\\) — comparable to the size of the nucleus.</p>" },
      { q: "What features of atomic structure could Rutherford's model NOT explain?",
        sol: "<p>The Rutherford nuclear model could not explain:</p><ul class='list-disc pl-5'><li><b>Stability of atoms:</b> classical electrons orbiting a nucleus would radiate energy and spiral in.</li><li><b>Discrete line spectra</b> (e.g. hydrogen) — orbits should give continuous radiation.</li><li><b>Quantisation of energy levels.</b></li></ul><p>These required Bohr's quantum extension and ultimately quantum mechanics.</p>" },
    ],
    zh: [
      { q: "描述拉塞福金箔散射實驗的設置。",
        sol: "<p>真空中，狹束 \\(\\alpha\\) 粒子（由放射源發出）射向極薄金箔；可旋轉的硫化鋅屏（或偵測器）記錄各角度散射粒子數，繪出角度分佈。</p>" },
      { q: "歸納三項主要觀察及對應結論。",
        sol: "<ol class='list-decimal pl-5 space-y-1'><li>大多數 α 粒子直穿 ⇒ 原子大部分為<b>空間</b>。</li><li>少數大角偏轉 ⇒ 存在集中的<b>正電荷</b>。</li><li>極少數（約 1/8000）反彈 ⇒ 此電荷集中於極小、極重的<b>原子核</b>。</li></ol>" },
      { q: "在湯姆遜「布甸模型」下，「α 粒子反彈」為何令人震驚？",
        sol: "<p>布甸模型中正電均勻分佈，電場處處微弱，無法使快 α 粒子反向。拉塞福曾形容如「15 寸炮彈被一張薄紙彈回」。</p>" },
      { q: "估算 5.0 MeV α 粒子正撞金核（\\(Z=79\\)）的最近距離。",
        sol: "<p>動能全轉電勢能：\\( \\text{KE} = k(2e)(Ze)/r\\)。\\(\\text{KE} = 8.0\\times10^{-13}\\,\\text{J}\\)。</p><p>\\(r = k(2e)(Ze)/\\text{KE} \\approx 4.5\\times10^{-14}\\,\\text{m} \\approx 45\\,\\text{fm}\\)。</p>" },
      { q: "拉塞福模型不能解釋哪些原子結構特性？",
        sol: "<ul class='list-disc pl-5'><li>原子的<b>穩定性</b>（古典電子應輻射能量旋落）。</li><li><b>離散線狀光譜</b>。</li><li><b>能量量子化</b>。</li></ul><p>需波耳模型及量子力學補充。</p>" },
    ],
  };

  B.photoelectric = {
    en: [
      { q: "State Einstein's photoelectric equation and define each symbol.",
        sol: "<p>\\[ hf = \\Phi + \\tfrac12 m v_\\max^2 = \\Phi + E_{k,\\max}. \\]</p><p>\\(h\\) Planck's constant; \\(f\\) photon frequency; \\(\\Phi\\) work function (minimum energy to release an electron from the metal); \\(E_{k,\\max}\\) maximum kinetic energy of emitted photoelectrons.</p>" },
      { q: "Calculate the threshold frequency \\(f_0\\) for a metal of work function \\(\\Phi = 4.5\\,\\text{eV}\\). (\\(h = 6.63\\times10^{-34}\\,\\text{J s}\\), \\(1\\,\\text{eV} = 1.6\\times10^{-19}\\,\\text{J}\\))",
        sol: "<p>At threshold all photon energy is used to overcome \\(\\Phi\\): \\(hf_0 = \\Phi\\).</p><p>\\[ f_0 = \\frac{\\Phi}{h} = \\frac{(4.5)(1.6\\times10^{-19})}{6.63\\times10^{-34}} = 1.09\\times10^{15}\\,\\text{Hz}. \\]</p><p>(In the UV.)</p>" },
      { q: "Explain why no electrons are emitted, regardless of intensity, if the light's frequency is below the threshold.",
        sol: "<p>Each photon delivers energy \\(hf\\) to a single electron. If \\(hf < \\Phi\\), no individual photon has enough energy to free an electron from the metal — even a high intensity (many photons per second) only means more under-energy collisions, never one with enough energy. This contradicts wave theory (which predicts emission for any frequency given enough intensity) and demonstrates the photon (particle) nature of light.</p>" },
      { q: "Light of wavelength \\(450\\,\\text{nm}\\) shines on a metal of work function \\(2.0\\,\\text{eV}\\). Find the maximum kinetic energy of emitted photoelectrons in eV.",
        sol: "<p>Photon energy: \\( E = hc/\\lambda = (6.63\\times10^{-34})(3\\times10^8)/(450\\times10^{-9}) = 4.42\\times10^{-19}\\,\\text{J} \\approx 2.76\\,\\text{eV}.\\)</p><p>\\(E_{k,\\max} = E - \\Phi = 2.76 - 2.0 = 0.76\\,\\text{eV}.\\)</p>" },
      { q: "Sketch (describe) the graph of \\(E_{k,\\max}\\) (y-axis) versus frequency \\(f\\) (x-axis). What do the slope and the intercepts represent?",
        sol: "<p>Straight line with positive slope, intercepting the \\(f\\)-axis at \\(f_0\\) (threshold frequency) and the \\(E_{k}\\)-axis at \\(-\\Phi\\).</p><ul class='list-disc pl-5'><li>Slope = \\(h\\) (Planck's constant) — same for all metals.</li><li>\\(f\\)-intercept = \\(f_0 = \\Phi/h\\) — depends on the metal.</li><li>\\(y\\)-intercept = \\(-\\Phi\\) (the work function with a negative sign).</li></ul>" },
    ],
    zh: [
      { q: "寫出愛因斯坦光電方程並解釋符號。",
        sol: "<p>\\(hf = \\Phi + \\tfrac12 m v_\\max^2\\)。\\(h\\) 普朗克常數；\\(f\\) 光子頻率；\\(\\Phi\\) 功函數（從金屬射出電子所需最低能量）；\\(E_{k,\\max}\\) 光電子最大動能。</p>" },
      { q: "金屬功函數 4.5 eV，求門檻頻率 \\(f_0\\)。",
        sol: "<p>\\(f_0 = \\Phi/h = (4.5)(1.6\\times10^{-19})/(6.63\\times10^{-34}) = 1.09\\times10^{15}\\,\\text{Hz}\\)（紫外）。</p>" },
      { q: "為何光頻低於門檻時，不論強度多大，皆無光電子射出？",
        sol: "<p>每光子只能將能量 \\(hf\\) 交予單一電子。若 \\(hf<\\Phi\\)，無一光子能釋出電子；強度大只代表光子數多，仍無一具足能量。此現象顛覆波動理論，證實光的粒子性。</p>" },
      { q: "波長 450 nm 光照射功函數 2.0 eV 金屬。求光電子最大動能（eV）。",
        sol: "<p>\\(E = hc/\\lambda = 4.42\\times10^{-19}\\,\\text{J} \\approx 2.76\\,\\text{eV}\\)；\\(E_{k,\\max} = 2.76 - 2.0 = 0.76\\,\\text{eV}\\)。</p>" },
      { q: "描述 \\(E_{k,\\max}\\)–\\(f\\) 直線圖，斜率與截距代表甚麼？",
        sol: "<p>正斜率直線。\\(f\\) 軸截距 \\(f_0\\)、\\(E_k\\) 軸截距 \\(-\\Phi\\)。斜率為 \\(h\\)（不同金屬皆同）。</p>" },
    ],
  };

  B.radioactive_range = {
    en: [
      { q: "Compare the penetrating power and ionising ability of α, β and γ radiations.",
        sol: "<table class='text-xs md:text-sm border border-slate-300 w-full'><tr class='bg-slate-100'><th class='border p-2'>Radiation</th><th class='border p-2'>Range in air</th><th class='border p-2'>Stopped by</th><th class='border p-2'>Ionising power</th></tr><tr><td class='border p-2'>α</td><td class='border p-2'>~5 cm</td><td class='border p-2'>Sheet of paper</td><td class='border p-2'>Very strong</td></tr><tr><td class='border p-2'>β</td><td class='border p-2'>~1 m</td><td class='border p-2'>Few mm of aluminium</td><td class='border p-2'>Moderate</td></tr><tr><td class='border p-2'>γ</td><td class='border p-2'>Many metres</td><td class='border p-2'>Several cm of lead</td><td class='border p-2'>Weak</td></tr></table>" },
      { q: "Why does α radiation have the strongest ionising power but the shortest range?",
        sol: "<p>α-particles are massive (\\(\\sim4u\\)) and doubly charged (\\(+2e\\)), so they interact strongly via Coulomb forces with electrons in matter — losing energy quickly through many ionisations. They therefore stop within a few cm of air or by a single sheet of paper. β-particles are light singly-charged electrons that interact less strongly per collision, so they penetrate further with weaker ionisation. γ-rays carry no charge and interact only sporadically (photoelectric/Compton/pair-production), giving long range and weak ionisation per metre.</p>" },
      { q: "A GM tube records 800 counts/min from a source. Background count is \\(20\\,\\text{counts/min}\\). When a 2 mm aluminium sheet is placed in front, the count drops to 150. What does this suggest about the source?",
        sol: "<p>Subtract background from each: source rate \\(=780\\); with Al \\(=130\\). The Al sheet has stopped about \\(83\\%\\) of the radiation but not all. β-particles are stopped by a few mm of Al but γ-rays mostly pass through. The remaining significant count after Al ⇒ the source emits both <b>β and γ</b> radiation.</p>" },
      { q: "Explain how the inverse-square law applies to γ radiation in air, but not to α or β.",
        sol: "<p>For an isotropic point γ-source in vacuum (or air, where γ is barely attenuated over short distances), the count rate is spread over a sphere of area \\(4\\pi r^2\\), giving \\(I \\propto 1/r^2\\). For α and β, absorption by air dominates over distance: their intensity falls much more rapidly than \\(1/r^2\\) and reaches zero beyond their finite range — the inverse-square geometric law is masked by absorption.</p>" },
      { q: "List two safety precautions when handling radioactive sources in a school laboratory.",
        sol: "<ol class='list-decimal pl-5 space-y-1'><li>Use long-handled tongs to keep distance (intensity \\(\\propto 1/r^2\\)).</li><li>Limit exposure time — total dose is dose-rate × time.</li><li>Use suitable shielding (lead for γ, aluminium for β, paper for α).</li><li>Never point the source at people; store sources in lead-lined boxes when not in use.</li><li>Wash hands and never eat/drink in the lab.</li></ol>" },
    ],
    zh: [
      { q: "比較 α、β、γ 三種射線的穿透能力與電離能力。",
        sol: "<table class='text-xs md:text-sm border border-slate-300 w-full'><tr class='bg-slate-100'><th class='border p-2'>射線</th><th class='border p-2'>空氣中射程</th><th class='border p-2'>可被擋住</th><th class='border p-2'>電離能力</th></tr><tr><td class='border p-2'>α</td><td class='border p-2'>約 5 cm</td><td class='border p-2'>一張紙</td><td class='border p-2'>很強</td></tr><tr><td class='border p-2'>β</td><td class='border p-2'>約 1 m</td><td class='border p-2'>幾毫米鋁</td><td class='border p-2'>中</td></tr><tr><td class='border p-2'>γ</td><td class='border p-2'>數米以上</td><td class='border p-2'>數厘米鉛</td><td class='border p-2'>弱</td></tr></table>" },
      { q: "為何 α 射線電離能力最強但射程最短？",
        sol: "<p>α 質量大（\\(\\sim4u\\)）、帶 \\(+2e\\) 電荷，與物質中電子強烈作用，多次電離快速失能，故被一張紙阻止。β 為輕、單電荷電子，每次作用弱，穿透較遠。γ 無電荷，作用零散，穿透極遠、單位距離電離極弱。</p>" },
      { q: "GM 管讀 800 c/min（背景 20 c/min）。加 2 mm 鋁板後讀 150。源發何種射線？",
        sol: "<p>扣背景：源 780、加鋁 130。鋁阻擋約 83%；β 被幾 mm 鋁阻擋而 γ 大致通過。仍有顯著計數 ⇒ 源同時發出 <b>β 與 γ</b>。</p>" },
      { q: "為何反平方定律對 γ 射線適用，對 α、β 不適用？",
        sol: "<p>各向同性 γ 點源於空氣中幾無吸收，計數率隨 \\(4\\pi r^2\\) 球面分佈，故 \\(I \\propto 1/r^2\\)。α、β 受空氣吸收主導，遠距前已歸零，幾何律被吸收掩蓋。</p>" },
      { q: "列出兩項學校實驗室處理放射源的安全措施。",
        sol: "<ol class='list-decimal pl-5 space-y-1'><li>用長柄夾具保持距離。</li><li>盡量縮短曝露時間。</li><li>適當屏蔽（α-紙、β-鋁、γ-鉛）。</li><li>切勿朝向人群；不用時放鉛盒。</li><li>實驗後洗手、勿在實驗室飲食。</li></ol>" },
    ],
  };

  B.half_life = {
    en: [
      { q: "Define the half-life \\(T_{1/2}\\) of a radioactive isotope.",
        sol: "<p>The <b>half-life</b> is the time required for half of the original number of unstable nuclei in a sample to undergo radioactive decay. Equivalently, it is the time for the activity (count rate, after subtracting background) to fall to half its previous value. It is a property of the isotope and is independent of the amount of substance, temperature, or pressure.</p>" },
      { q: "A sample of \\(N_0 = 8.0\\times10^{20}\\) atoms decays with \\(T_{1/2} = 4.0\\,\\text{days}\\). How many atoms remain after \\(12\\) days?",
        sol: "<p>12 days = 3 half-lives, so \\( N = N_0/2^3 = N_0/8\\):</p><p>\\[ N = (8.0\\times10^{20})/8 = 1.0\\times10^{20}. \\]</p>" },
      { q: "The activity of a source falls from 1600 Bq to 100 Bq in 28 days. Find the half-life.",
        sol: "<p>Ratio: \\(1600/100 = 16 = 2^4\\). So 4 half-lives occurred in 28 days:</p><p>\\[ T_{1/2} = 28/4 = 7.0\\,\\text{days}. \\]</p>" },
      { q: "Show that \\(N(t) = N_0\\,e^{-\\lambda t}\\) with \\(\\lambda = \\dfrac{\\ln 2}{T_{1/2}}\\).",
        sol: "<p>Each nucleus has a probability \\(\\lambda\\,dt\\) of decaying in a small interval \\(dt\\): \\( dN = -\\lambda N\\,dt\\Rightarrow N = N_0 e^{-\\lambda t}\\).</p><p>By definition \\(N(T_{1/2}) = N_0/2\\): \\(\\tfrac12 = e^{-\\lambda T_{1/2}}\\Rightarrow \\lambda T_{1/2} = \\ln 2\\), giving \\(\\lambda = \\ln 2/T_{1/2}\\).</p>" },
      { q: "Carbon-14 has a half-life of \\(5730\\) years. A piece of ancient wood has \\(\\tfrac14\\) of the C-14 activity of fresh wood. Estimate its age.",
        sol: "<p>\\(1/4 = (1/2)^2\\) ⇒ 2 half-lives elapsed.</p><p>\\[ \\text{Age} = 2 \\times 5730 = 11{,}460\\,\\text{years}. \\]</p>" },
    ],
    zh: [
      { q: "定義放射性同位素的半衰期 \\(T_{1/2}\\)。",
        sol: "<p>樣本中原有不穩定核衰變一半所需時間；亦即活度（扣背景後）降至原值一半所需時間。為同位素之固有性質，與物量、溫度、壓力無關。</p>" },
      { q: "\\(N_0 = 8.0\\times10^{20}\\) 個原子，\\(T_{1/2} = 4.0\\) 天。12 天後剩多少？",
        sol: "<p>12 天 = 3 個半衰期，\\(N = N_0/2^3 = 1.0\\times10^{20}\\) 個。</p>" },
      { q: "源活度 28 天內由 1600 Bq 降至 100 Bq，求半衰期。",
        sol: "<p>\\(1600/100 = 16 = 2^4\\)，故經 4 個半衰期；\\(T_{1/2} = 7.0\\,\\text{天}\\)。</p>" },
      { q: "證明 \\(N(t)=N_0 e^{-\\lambda t}\\) 且 \\(\\lambda = \\ln 2/T_{1/2}\\)。",
        sol: "<p>每核於 \\(dt\\) 內衰變機率 \\(\\lambda\\,dt\\)：\\(dN = -\\lambda N\\,dt \\Rightarrow N = N_0 e^{-\\lambda t}\\)。代入 \\(N(T_{1/2}) = N_0/2\\) 得 \\(\\lambda = \\ln 2/T_{1/2}\\)。</p>" },
      { q: "C-14 半衰期 5730 年。古木的 C-14 活度為新木的 \\(\\tfrac14\\)。估其年齡。",
        sol: "<p>\\(1/4 = (1/2)^2\\) ⇒ 經 2 個半衰期，年齡約 \\(2 \\times 5730 = 11{,}460\\) 年。</p>" },
    ],
  };

  B.random_decay = {
    en: [
      { q: "Why is radioactive decay described as a <b>random</b> process?",
        sol: "<p>It is impossible to predict <b>which</b> particular nucleus will decay next, or <b>when</b> any individual nucleus will decay. Each unstable nucleus has the same constant probability per unit time of decaying, independent of its history and of other nuclei. Only when a large number of nuclei are considered does a predictable average behaviour (the exponential decay law) emerge.</p>" },
      { q: "Explain the difference between <b>random</b> and <b>spontaneous</b> as used in nuclear physics.",
        sol: "<p><b>Spontaneous:</b> The decay is not triggered by any external influence — it happens of itself. Heating, cooling, chemical state, or pressure do not affect the rate.</p><p><b>Random:</b> Within the population of unstable nuclei, the decay of any individual is unpredictable in time; only the statistical average rate is predictable.</p><p>Both descriptions apply simultaneously to radioactive decay.</p>" },
      { q: "A GM tube near a long-lived source records the following counts in successive 10-second intervals: 48, 52, 49, 55, 47, 51, 50. Calculate the mean count rate and the standard deviation, and explain what they tell you.",
        sol: "<p>Mean = \\((48+52+49+55+47+51+50)/7 = 50.3\\) counts per 10 s.</p><p>Std dev (sample): \\(\\sigma \\approx 2.7\\) counts. For Poisson statistics, \\(\\sigma \\approx \\sqrt{\\bar N} = \\sqrt{50} \\approx 7.1\\). The observed scatter (\\(\\sigma\\approx 2.7\\)) is consistent with random fluctuations being present, even with a constant mean — confirming the random nature.</p>" },
      { q: "Why must <b>background radiation</b> always be measured and subtracted in a half-life experiment?",
        sol: "<p>Background radiation (cosmic rays, naturally radioactive materials in walls and air, etc.) gives a constant non-zero count rate even with no source present. To get the true count rate due to the source, one subtracts the average background from each measured value. Failing to do so makes long-time data look like a non-zero asymptote and gives an over-estimate of the half-life.</p>" },
      { q: "Toss a large number of dice (say 600). Remove every die showing a 6 after each round. Explain why this models radioactive decay.",
        sol: "<p>Each die has a probability \\(1/6\\) of being \"removed\" per round, independent of other dice and of past rounds — exactly analogous to the constant decay probability \\(\\lambda\\) per unit time. The expected number remaining after \\(n\\) rounds is \\(N_n = N_0 (5/6)^n\\), an exponential decay; with \\(\\lambda = \\ln(6/5)/\\text{round}\\). Individual dice fall randomly, but the macroscopic decay curve is predictable.</p>" },
    ],
    zh: [
      { q: "為何放射性衰變被稱為<b>隨機</b>過程？",
        sol: "<p>無法預測哪一顆核心會先衰變，亦無法預測任一核心何時衰變。每個不穩定核心的衰變機率與時間、與其他核心無關。只在大量核心情況下，平均行為（指數衰變律）才可預測。</p>" },
      { q: "「隨機」與「自發」在核物理中有何分別？",
        sol: "<p><b>自發：</b>不需任何外界觸發，本身發生；溫度、化學狀態、壓力均不影響速率。</p><p><b>隨機：</b>個別核心衰變時間不可預測，僅統計平均率可預測。兩者同時適用於放射性衰變。</p>" },
      { q: "GM 管於長壽命源旁，每 10 秒讀數依次為 48、52、49、55、47、51、50。求平均及標準差，並說明其意義。",
        sol: "<p>平均 = 50.3。樣本標準差 \\(\\sigma \\approx 2.7\\)。Poisson 統計下 \\(\\sigma \\approx \\sqrt{\\bar N} = 7.1\\)，所觀數值在合理範圍內，反映隨機性。</p>" },
      { q: "為何半衰期實驗必須量度並扣除<b>背景輻射</b>？",
        sol: "<p>背景輻射（宇宙線、環境輻射）即使無源亦有讀數。需扣背景才得真實源活度，否則會高估半衰期。</p>" },
      { q: "投擲大量骰子（如 600 個），每輪移走出 6 點者。為何此模型可模擬放射衰變？",
        sol: "<p>每骰每輪有 \\(1/6\\) 機率被移走，與其他骰及歷史無關，類比於每顆核每單位時間的恆定衰變機率。期望剩餘 \\(N_n = N_0 (5/6)^n\\) 為指數衰減；個別隨機，但宏觀曲線可預測。</p>" },
    ],
  };

})();
