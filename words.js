const Words = [
  { tr: "az", en: "less" },
  { tr: "karın, mide", en: "stomach" },
  { tr: "iyilik, yardım", en: "favour" },
  { tr: "ateş", en: "fever" },
  { tr: "kayıt yaptırmak", en: "check in" },
  { tr: "hayati", en: "crucial" },
  { tr: "toplamak", en: "gather" },
  { tr: "farkında olmak", en: "aware" },
  { tr: "düzensizlik", en: "disorder" },
  { tr: "dikkat", en: "attention" },
  { tr: "fırçalamak, fırça", en: "brush" },
  { tr: "otoyol", en: "highway" },
  { tr: "çarşaf", en: "sheet" },
  { tr: "yastık", en: "pillow" },
  { tr: "battaniye", en: "blanket" },
  { tr: "havlu", en: "towel" },
  { tr: "en az", en: "least" },
  { tr: "en azından", en: "at least" },
  { tr: "kapalı", en: "closed" },
  { tr: "çevrelemek, kuşatma", en: "surround" },
  { tr: "adı geçen", en: "mentioned" },
  { tr: "görme, görünüş, manzara", en: "sight" },
  { tr: "yanında", en: "beside" },
  { tr: "düzgün şekilde, temizce", en: "neatly" },
  { tr: "atık, harcamak", en: "waste" },
  { tr: "önlemek, kaçınmak", en: "avoid" },
  { tr: "korumak, bakım yapmak, sürdürmek", en: "maintain" },
  { tr: "diğer adıyla", en: "aka" },
  { tr: "şimdiye kadar", en: "so far" },
  { tr: "bağımsız", en: "independent" },
  { tr: "ilkbahar", en: "spring" },
  { tr: "dışında, ayrıca", en: "besides" },
  { tr: "garip", en: "awkward" },
  { tr: "lavabo", en: "sink" },
  { tr: "belki", en: "perhaps" },
  { tr: "harcanmış, bitkin, yorgun", en: "spent" },
  { tr: "makale, deneme, kalkışmak", en: "essay" },
  { tr: "ağız", en: "mouth" },
  { tr: "engellemek, önlemek", en: "prevent" },
  { tr: "sonsuz", en: "infinity" },
  { tr: "denklem", en: "equation" },
  { tr: "ilave, eklemek", en: "addition" },
  { tr: "kör", en: "blind" },
  { tr: "yarasa", en: "bat" },
  { tr: "tanık", en: "witness" },
  { tr: "şüpheli, kuşkulu", en: "suspicious" },
  { tr: "bebek bakıcılığı, bebeğe bakmak", en: "babysit" },
  { tr: "ısrar, ısrat etmek", en: "insist" },
  { tr: "daha az(sayılamayan)", en: "less" },
  { tr: "daha az(sayılabilen)", en: "fewer" },
  { tr: "fırtına", en: "strom" },
  { tr: "tıraş olmak", en: "shave" },
  { tr: "masumiyet", en: "innocence" },
  { tr: "suçlama, şarj etmek", en: "charge" },
  { tr: "tutuklamak", en: "arrest" },
  { tr: "istekli, kasıtlı", en: "wilful" },
  { tr: "kavga, tartışma", en: "quarrel" },
  { tr: "sakin", en: "resident" },
  { tr: "kiralayan", en: "renter" },
  { tr: "kiracı", en: "tenant" },
  { tr: "mal sahibi, mülk sahibi", en: "proprieter" },
  { tr: "semt, ilçe", en: "district" },
  { tr: "sonbahar", en: "fall" },
  { tr: "sıkıca, kesin olarak", en: "firmly" },
  { tr: "yanında, dışında", en: "beside" },
  { tr: "başarısızlık, arıza, kusur", en: "failure" },
  { tr: "kader", en: "fate" },
  { tr: "kurtulmak, kaçış, firar", en: "getaway" },
  { tr: "cezbetmek, büyülemek", en: "fascinate" },
  { tr: "çılgınca, delice", en: "madly" },
  { tr: "hırsız, soyguncu", en: "robber" },
  { tr: "soygun, hırsızlık", en: "robbery" },
  { tr: "dahili, iç, doğa", en: "internal" },
  { tr: "uygun, yerinde", en: "appropriate" },
  { tr: "isyancı", en: "rioter" },
  { tr: "acınası, sefil", en: "miserable" },
  { tr: "düşünmek, dikkate almak", en: "consider" },
  { tr: "dolaşmak, gezmek", en: "wander" },
  { tr: "çakıl", en: "pebble" },
  { tr: "mutlaka, zorunlu olarak", en: "necessarily" },
  { tr: "kötü, edepsiz", en: "nasty" },
  { tr: "üvey anne", en: "stepmother" },
  { tr: "kulübe, kır evi", en: "cottage" },
  { tr: "yuvarlanmak", en: "roll, tumble" },
  { tr: "olay", en: "incident, event, case" },
  { tr: "maaş, ücret", en: "wage" },
  { tr: "sadece, yalnızca", en: "merely" },
  { tr: "canlandırmak, uyarmak, teşvik etmek", en: "stimulate" },
  { tr: "övgü, övmek", en: "praise" },
  { tr: "su birikintisi, çamur", en: "puddle" },
  { tr: "dökmek, boşaltmak", en: "pour" },
  { tr: "cesaret", en: "courage" },
  { tr: "fatura", en: "bill" },
  { tr: "çaresizlik", en: "despair" },
  { tr: "vicdan, inanç", en: "conscience" },
  { tr: "sert, ateşli, kızgın", en: "fierce" },
  { tr: "karanlık, belirsiz, gizlemek", en: "obscure" },
  { tr: "yağmalamak, ganimet", en: "plunder" },
  { tr: "aç gözlü", en: "greedy" },
  { tr: "masal", en: "tale" },
  { tr: "peri", en: "fairy" },
  { tr: "hıçkırmak, hıçkırarak ağlamak", en: "sob" },
  { tr: "ayrıntılı, gereksiz sözlerle dolu", en: "verbose" },
  { tr: "yarışma", en: "competition" },
  { tr: "ısıtma", en: "heating" },
  { tr: "klima", en: "aircon" },
  { tr: "kalorifer", en: "radiator" },
  { tr: "priz", en: "socket" },
  { tr: "halı", en: "carpet" },
  { tr: "tavan", en: "ceiling" },
  { tr: "yavaş yavaş azalmak", en: "wear off" },
  { tr: "bahsetmek, değinmek, başvurmak", en: "refer" },
  { tr: "acı çekmek, katlanmak", en: "suffer" },
  { tr: "bayram", en: "feast" },
  { tr: "nadir, ender, seyrek", en: "rare" },
  { tr: "kokuşmuş, pis kokmak", en: "stink" },
  { tr: "beyin", en: "brain" },
  { tr: "yol, yöntem, tarz", en: "way" },
  { tr: "izlenim", en: "impression" },
  { tr: "aşmak, üstesinden gelmek", en: "overcome" },
  { tr: "tanışmak, taktir etmek", en: "introduce" },
  { tr: "geçit", en: "gate" },
  { tr: "kardeş", en: "sibling" },
  { tr: "kulak misafiri olmak", en: "overhear" },
  { tr: "kafa sallamak", en: "nod" },
  { tr: "zımbırtı, hile, küçük alet", en: "gadget" },
  { tr: "olma eğilimi", en: "tend to be" },
  { tr: "üzerine", en: "onto" },
  { tr: "kestirme, uyuklamak", en: "nap" },
  { tr: "eksiklik, olmamak", en: "lack" },
  { tr: "iş arkadaşı", en: "coworker" },
  { tr: "öğretilen", en: "taught" },
  { tr: "tüyo", en: "tip" },
  { tr: "hayal kırıklığı", en: "disappointment" },
  { tr: "içine", en: "into" },
  { tr: "yuva, kuluçka", en: "nest" },
  { tr: "deniz tutması", en: "seasick" },
  { tr: "beceriksiz", en: "klutzy" },
  { tr: "merdiven", en: "stairs" },
  { tr: "kaya, taş, elmas, sallamak", en: "rock" },
  { tr: "dövmek, yenmek, vurmak", en: "beat" },
  { tr: "utangaç", en: "shy" },
  { tr: "çocukca", en: "childish" },
  { tr: "kaçırmak, vuramamak, özlemek, bayan", en: "miss" },
  { tr: "kaba, cimri, huysuz, anlam", en: "mean" },
  { tr: "sinirli, gergin", en: "nervous" },
  { tr: "davranmak, hareket, hareket etmek", en: "act" },
  { tr: "gözden geçirmek", en: "review" },
  { tr: "köken, menşei, başlangıç", en: "origin" },
  { tr: "bulmak, bulup çıkarmak", en: "find out" },
  { tr: "hazine, değerli", en: "treasure" },
  { tr: "çöp tenekesi", en: "dumpster" },
  { tr: "nefes", en: "breath" },
  { tr: "ilişkili", en: "related" },
  { tr: "kalmak, sürdürmek, durmak, kalıntı", en: "remain" },
  { tr: "mezar", en: "grave" },
  { tr: "soruşturma, araştırma, inceleme", en: "investigation" },
  { tr: "yaygın, genel", en: "widespread" },
  { tr: "taciz", en: "abuse" },
  { tr: "cinsel", en: "sexual" },
  { tr: "kabile, aşiret, boy", en: "tribe" },
  { tr: "son, yetmek, sürmek", en: "last" },
  { tr: "çaba", en: "effort" },
  { tr: "kafes, hapis", en: "cage" },
  { tr: "toplum, topluluk, dernek", en: "society" },
  { tr: "gençlik", en: "youth" },
  { tr: "dini, dinsel", en: "religious" },
  { tr: "girişim, teşebbüs, kalkışma, denemek", en: "attempt" },
  { tr: "temsil etmek, sunmak, göstermek", en: "represent" },
  { tr: "başka bir şey", en: "something else" },
  { tr: "şapka", en: "hat" },
  { tr: "saman", en: "straw" },
  { tr: "düzensiz, pürüzlü", en: "uneven" },
  { tr: "başarmak, ulaşmak", en: "achieve" },
  { tr: "engebeli", en: "bumpy" },
  { tr: "ne yazik ki, malesef", en: "unfortunately" },
  { tr: "pürüzsüz, düz, yumuşak", en: "smooth" },
  { tr: "yüzyıl, asır", en: "century" },
  { tr: "yarar, fayda", en: "utility" },
  { tr: "araç, taşıt", en: "vehicle" },
  { tr: "garip bir şekilde", en: "oddly" },
  { tr: "önemli, birincil", en: "prime" },
  { tr: "ön izleme", en: "preview" },
  { tr: "bağırmak", en: "yell" },
  { tr: "sus, susturmak", en: "shush" },
  { tr: "kibar, nazik", en: "polite" },
  { tr: "bıçaklamak", en: "stab" },
  { tr: "beslemek", en: "feed" },
  { tr: "pişirmek", en: "bake" },
  { tr: "marka", en: "brand" },
  { tr: "kendileri", en: "themselves" },
  { tr: "kendiniz", en: "yourselves" },
  { tr: "kendim", en: "myself" },
  { tr: "atmak, fırlatmak, düşürmek", en: "throw" },
  { tr: "sıradan, normal", en: "ordinary" },
  { tr: "talimat", en: "instruction" },
  { tr: "ıslık, ıslık çalmak, ötmek", en: "whistle" },
  { tr: "tasma", en: "leash" },
  { tr: "arka bahçe", en: "backyard" },
  { tr: "eğitimci, eğitmen", en: "educator" },
  { tr: "acı, batma, sokmak", en: "sting" },
  { tr: "ezmek, vurmak", en: "swat" },
  { tr: "tahmin", en: "prediction, forecast" },
  { tr: "alkış", en: "applause, clap" },
  { tr: "miktar", en: "amount" },
  { tr: "gerçekten", en: "truly" },
  { tr: "mühür, kapatmak", en: "seal" },
  { tr: "çürüme, bozulma", en: "decay" },
  { tr: "pis koku", en: "stench" },
  { tr: "mahvetmek", en: "ruin" },
  { tr: "güç, kuvvet, dayanıklılık", en: "strength" },
  { tr: "tahmin etmek", en: "predict" },
  { tr: "gömmek", en: "bury" },
  { tr: "ekmek, dikmek", en: "sow" },
  { tr: "tehtit etmek", en: "threaten" },
  { tr: "veba", en: "plague" },
  { tr: "gevşetmek", en: "loosen" },
  { tr: "genel, tüm, etraflı", en: "overall" },
  { tr: "oran", en: "rate" },
  { tr: "konsey, meclis, kurul", en: "council" },
  { tr: "kanıtlamak, ispatlamak", en: "prove" },
  { tr: "gerçek manada, kelimenin tam anlamıyla", en: "literally" },
  { tr: "dönem, süre, adlandırmak, demek", en: "term" },
  { tr: "istek, talep", en: "demand" },
  { tr: "açık hızlı, ifade etmek, anlatmak", en: "express" },
  { tr: "kısıtlamak, sınırlamak", en: "restrict" },
  { tr: "eski", en: "former" },
  { tr: "izin vermek, müsaade", en: "permit" },
  { tr: "tutuklamak", en: "arrest" },
  { tr: "kanun koyucu, kanuni", en: "lawmaker" },
  { tr: "eleştirmen, muhalif", en: "critic" },
  { tr: "keskin bir şekilde", en: "sharply" },
  { tr: "anket", en: "poll" },
  { tr: "muhalefet, karşıtlık, zıtlık", en: "opposition" },
  { tr: "bölge, toprak, ülke", en: "territory" },
  { tr: "boyunca, yanısıra", en: "along" },
  { tr: "birlik", en: "union" },
  { tr: "işaret", en: "mark" },
  { tr: "büyük oranda", en: "largely" },
  { tr: "itiraz", en: "objection" },
  { tr: "yaklaşan", en: "upcoming" },
  { tr: "mürettebat", en: "crew" },
  { tr: "sağlamak", en: "provide" },
  { tr: "kaşif, araştırmacı", en: "explorer" },
  { tr: "gereçler", en: "supplies" },
  { tr: "havalanmak, çıkarmak, götürmek", en: "take off" },
  { tr: "metro", en: "subway" },
  { tr: "sağlamak, garantiye almak", en: "ensure" },
  { tr: "insanlı", en: "manned" },
  { tr: "uygun şekilde", en: "properly" },
  { tr: "yörünge", en: "orbit" },
  { tr: "keskin, istekli", en: "keen" },
  { tr: "ipucu", en: "clue" },
  { tr: "ilave", en: "addition" },
  { tr: "yine de", en: "still" },
  { tr: "hazırlık", en: "preparation" },
  { tr: "pis kokulu", en: "smelly" },
  { tr: "aynı zamanda", en: "as well" },
  { tr: "yapmak, uygulamak", en: "perform" },
  { tr: "rekabetçi", en: "competitive" },
  { tr: "kaçınılmaz olarak", en: "inevitably" },
  { tr: "işe gidip gelmek", en: "commute" },
  { tr: "ileri, dışarı, başka", en: "forth" },
  { tr: "danışman", en: "consultant" },
  { tr: "kafa karıştırıcı", en: "confusing" },
  { tr: "oturan, yerli, sakini", en: "resident" },
  { tr: "rüzgar, hava", en: "wind" },
  { tr: "endişeli", en: "concerned, worried" },
  { tr: "alışkanlık", en: "habit" },
  { tr: "ikiyüzlü", en: "hypocritical" },
  { tr: "yüzde", en: "percent" },
  { tr: "deniz aşırı, deniz aşırı ülkelerde", en: "overseas" },
  { tr: "mazur kalma, mazuriyet", en: "exposure" },
  { tr: "kaçınmak, önlemek", en: "avoid" },
  { tr: "aşırı, fazla", en: "excessive" },
  { tr: "düşünce", en: "thought, idea, opinion, mind" },
  { tr: "bir kenara, bir yana", en: "aside" },
  { tr: "yönerge", en: "guideline" },
  { tr: "anavatan", en: "home state" },
  { tr: "klavuz", en: "guide" },
  { tr: "teslim", en: "surrender" },
  { tr: "mantıksız", en: "irrational" },
  { tr: "alışılmadık", en: "unusual" },
  { tr: "titremek, bayılmak, ürpermek", en: "shiver" },
  { tr: "kurtulmak, temizlemek", en: "rid" },
  { tr: "baygın", en: "faint" },
  { tr: "fobi", en: "phobia" },
  { tr: "şiddetli, acı", en: "severe" },
  { tr: "kürklü", en: "furry" },
  { tr: "sonunda, sonuçta", en: "eventually" },
  { tr: "yeterlilik", en: "proficiency" },
  { tr: "tahmin", en: "estimation" },
  { tr: "fırlatmak", en: "throw away" },
  { tr: "böcek", en: "beetle" },
  { tr: "yırtıp atmak", en: "tear up" },
  { tr: "huysuz", en: "grumpy" },
  { tr: "fırsat, şans", en: "opportunity" },
  { tr: "gözyaşı, koparmak, yırtmak", en: "tear" },
  { tr: "teklif", en: "offer" },
  { tr: "personel", en: "staff" },
  { tr: "fikir", en: "opinion" },
  { tr: "muhasebe", en: "accounting" },
  { tr: "görev", en: "assignment" },
  { tr: "zam, yükseltmek, artış", en: "raise" },
  { tr: "öz geçmiş, devam et", en: "resume" },
  { tr: "muhabir", en: "reporter" },
  { tr: "söylenti", en: "rumor" },
  { tr: "dedikodu", en: "gossip" },
  { tr: "duyuru", en: "announcement" },
  { tr: "tanımlanmış", en: "identified" },
  { tr: "genişletmek", en: "expand" },
  { tr: "teşvik etmek", en: "encourage" },
  { tr: "dolap, klozet", en: "closet" },
  { tr: "mikrodalga", en: "microwave" },
  { tr: "fırın", en: "oven" },
  { tr: "cep", en: "pocket" },
  { tr: "kaplama", en: "coating" },
  { tr: "dağınık", en: "mess" },
  { tr: "keskin", en: "sharp" },
  { tr: "bütçe", en: "budget" },
  { tr: "düşmek", en: "knock" },
  { tr: "tezgah", en: "workbench" },
  { tr: "cennet", en: "paradise" },
  { tr: "uzman", en: "specialist" },
  { tr: "belirlenen, kararlı, kesin", en: "determined" },
  { tr: "sürdürmek, korumak, sağlamak", en: "maintain" },
  { tr: "uçurum", en: "cliff" },
  { tr: "öylesine, gündelik, önemsiz", en: "casual" },
  { tr: "gönüllü", en: "voluntary" },
  { tr: "ayırmak, ayrı", en: "separate" },
  { tr: "tavır, davranış", en: "manner" },
  { tr: "bağlı, bağlamak", en: "tied, tether" },
  { tr: "maskesiz", en: "maskless" },
  { tr: "davranmak", en: "behave" },
  { tr: "kitle, yığın", en: "mass" },
  { tr: "uygun, elverişli", en: "convenient" },
  { tr: "üzüntü, pişmanlık", en: "regret" },
  { tr: "olay yaratmak", en: "make a scene" },
  { tr: "teklif etmek", en: "propose" },
  { tr: "iş birliği yapmak, birlikte çalışmak", en: "cooperate" },
  { tr: "niyet etmek", en: "intend" },
  { tr: "nefret etmek", en: "bother" },
  { tr: "edepsizlik", en: "rudeness" },
  { tr: "cesaret etmek", en: "dare" },
  { tr: "zorlamak", en: "compel" },
  { tr: "ihmal etmek", en: "neglect" },
  { tr: "yardım etmek", en: "assist" },
  { tr: "inandırmak", en: "convince" },
  { tr: "durdurmak", en: "cease" },
  { tr: "hazırlamak", en: "arrange" },
  { tr: "çabalamak", en: "attempt" },
  { tr: "amaçlamak", en: "aim" },
  { tr: "içe dönük", en: "introvert" },
  { tr: "yarar, fayda", en: "benefit" },
  { tr: "gençlik", en: "youth" },
  { tr: "fırsat", en: "occasion" },
  { tr: "teslim etmek", en: "receive" },
  { tr: "reddetme", en: "refusal" },
  { tr: "düzenleme", en: "regulation" },
  { tr: "uymak, itaat etmek", en: "obey" },
  { tr: "sigorta", en: "insurance" },
  { tr: "yaralanma, hasar, zarar", en: "injury" },
  { tr: "cazibe, çekicilik", en: "attraction" },
  { tr: "damga, pul", en: "stamp" },
  { tr: "çamaşır", en: "laundry" },
  { tr: "ağzı kulaklarına varmak", en: "grinning from ear to ear" },
  { tr: "sert, zorlu", en: "tough" },
  { tr: "doldur", en: "fill out" },
  { tr: "iyilik, yardım", en: "favour" },
  { tr: "haber vermek, bildirmek", en: "notify" },
  { tr: "hatırlatmak, andırmak", en: "remind" },
  { tr: "göğüs, sandık", en: "chest" },
  { tr: "tuhaf", en: "perculiar" },
  { tr: "hibe, bağış, burs", en: "grant" },
  { tr: "borç, ödünç verme", en: "loan" },
  { tr: "gücü yetmek", en: "afford" },
  { tr: "iddia etmek", en: "claim" },
  { tr: "ödünç almak", en: "borrow" },
  { tr: "doğrusu", en: "as a matter of fact" },
  { tr: "yemek odası", en: "dining room" },
  { tr: "hırslı", en: "ambitious" },
  { tr: "çok yakından", en: "intimately" },
  { tr: "bozmak, rahatsız etmek", en: "disturb" },
  { tr: "nazikçe", en: "gently" },
  { tr: "bağışıklık", en: "immune" },
  { tr: "uluslarüstü", en: "supranational" },
  { tr: "salgın", en: "epidemic" },
  { tr: "hastalık", en: "disease" },
  { tr: "ummak, beklemek", en: "anticipate" },
  { tr: "kaçınmak", en: "avoid" },
  { tr: "desteklemek", en: "advocate" },
  { tr: "kabul etmek", en: "admit" },
  { tr: "kafa yormak", en: "contemplate" },
  { tr: "erteleme, gecikme", en: "delay" },
  { tr: "şaşkın", en: "astonished" },
  { tr: "içerik, memnun", en: "content" },
  { tr: "utanç", en: "ashame" },
  { tr: "öfkeli, kızgın", en: "furious" },
  { tr: "ödlek", en: "coward" },
  { tr: "zengin, varlıklı", en: "wealthy" },
  { tr: "yoksul, fakir", en: "poor" },
  { tr: "sığ", en: "shallow" },
  { tr: "ekşi", en: "sour" },
  { tr: "korkunç", en: "awful" },
  { tr: "antik", en: "ancient" },
  { tr: "örtmek", en: "cover" },
  { tr: "düşmek, sonbahar", en: "fall" },
  { tr: "lavabo", en: "sink" },
  { tr: "sarılmak, kucaklaşmak", en: "cuddle" },
  { tr: "okşamak", en: "caress" },
  { tr: "kazmak", en: "dig" },
  { tr: "oldukça, daha doğrusu", en: "rather" },
  { tr: "tombul", en: "plump" },
  { tr: "boş zaman", en: "spare time" },
  { tr: "acil", en: "urgent" },
  { tr: "iletmek", en: "transmit" },
  { tr: "güvence, güven", en: "assurance" },
  { tr: "istek, talep", en: "deman" },
  { tr: "kendine güvenen", en: "confident" },
  { tr: "bebek", en: "doll" },
  { tr: "davranış", en: "behavior" },
  { tr: "öfkeli", en: "outraged" },
  { tr: "faliyet alanı, sahne", en: "scene" },
  { tr: "bilgelik", en: "wisdom" },
  { tr: "amaç, hedef", en: "goal" },
  { tr: "ilerleme", en: "progress" },
  { tr: "sabit, sürekli", en: "constant" },
  { tr: "kavramak", en: "held" },
  { tr: "tereddüt etmek", en: "hesitate" },
  { tr: "danışmak", en: "consult" },
  { tr: "yönetici", en: "executive" },
  { tr: "meydana gelmek", en: "take place" },
  { tr: "enerji, güç", en: "vim" },
  { tr: "modern, çağdaş", en: "contemporary" },
  { tr: "araştırma", en: "survey" },
  { tr: "ayırmak", en: "disperse" },
  { tr: "fazlaca", en: "considerably" },
  { tr: "birey, bireysel", en: "individual" },
  { tr: "muayene, sınav, test", en: "examination" },
  { tr: "özellikle", en: "in particular" },
  { tr: "rağmen", en: "despite" },
  { tr: "diğer yandan", en: "on the other hand" },
  { tr: "rağmen", en: "in spite of" },
  { tr: "yine de", en: "nevertheless" },
  { tr: "yalnız", en: "lonely" },
  { tr: "her şeye rağmen, yine de", en: "nonetheless" },
  { tr: "böyle", en: "such" },
  { tr: "aramak", en: "seek" },
  { tr: "reddetmek", en: "reject" },
  { tr: "çekingenlikle", en: "timidly" },
  { tr: "saçma, gülünç", en: "ridiculous" },
  { tr: "kale", en: "fort" },
  { tr: "uzanmak", en: "lie" },
  { tr: "kurmak", en: "set" },
  { tr: "ödünç vermek", en: "lend" },
  { tr: "asmak", en: "exceed, hang" },
  { tr: "anlaşma, ilgilenmek", en: "deal" },
  { tr: "üflemek, esmek", en: "blow" },
  { tr: "şimdi in", en: "get off now" },
  { tr: "ısırmak", en: "bite" },
  { tr: "başlamak", en: "begin" },
  { tr: "olmak", en: "be, become" },
  { tr: "son zamanlarda", en: "recently, lately" },
  { tr: "yetenek", en: "ability" },
  { tr: "kavga etmek", en: "fight, quarrel" },
  { tr: "dövmek", en: "beat" },
  { tr: "yalancı", en: "liar" },
  { tr: "sıcaklık, ısıtmak", en: "heat" },
  { tr: "kaynama", en: "boil" },
  { tr: "karşısında", en: "against" },
  { tr: "neyse ki, şanslı", en: "fortunate" },
  { tr: "hemen, derhal", en: "immediately" },
  { tr: "kılık değiştirmek, gizlemek", en: "disguise" },
  { tr: "diğer tarafta", en: "across" },
  { tr: "ayak", en: "feet" },
  { tr: "razı olmak", en: "accede" },
  { tr: "doğru, hatasız", en: "accurate" },
  { tr: "aksi taktirde", en: "otherwise" },
  { tr: "saçma", en: "absurd" },
  { tr: "yerleştirmek", en: "accommodate" },
  { tr: "eşlik etmek", en: "accompany" },
  { tr: "mutlak, kesin", en: "absolute" },
  { tr: "yok, eksik", en: "absent" },
  { tr: "yokluk", en: "absence" },
  { tr: "içinde olmak", en: "aboard" },
  { tr: "hakkında, yaklaşık olarak", en: "about" },
  { tr: "ağrı", en: "ache" },
  { tr: "yurt dışı", en: "abroad" },
  { tr: "terk etmek", en: "abandon" },
  { tr: "birini yemeğe davet etmek", en: "ask out" },
  { tr: "birini eve, içeriğe davet etmek", en: "ask in" },
  { tr: "yukarıdaki", en: "above" },
  { tr: "hesaba katmak, göz önünde bulundurmak", en: "allow for" },
  { tr: "önemli olmak, konu", en: "matter" },
  { tr: "ricada bulunmak", en: "ask for" },
  { tr: "aynı fikirde olmak, uymak", en: "agree with" },
  { tr: "kötü davranmak, sorun çıkarmak", en: "act up" },
  { tr: "nedenini göstermek, hesap vermek", en: "account for" },
  { tr: "biri hakkında soru sormak, halini hatrını sormak", en: "ask after" },
  { tr: "eğlendirmek", en: "entertain" },
  { tr: "çizgi roman", en: "comic book" },
  { tr: "karakteristik, kendine özgü", en: "distinctive" },
  { tr: "aptalca", en: "foolish" },
  { tr: "ortak", en: "joint" },
  { tr: "kuru", en: "dry" },
  { tr: "bağlı kalmak", en: "abide by" },
  { tr: "çok az", en: "very few" },
  { tr: "nedeniyle", en: "due to" },
  { tr: "ancak", en: "however" },
  { tr: "sonuç olarak, bundan dolayı", en: "consequently" },
  { tr: "teslim etmek", en: "deliver" },
  { tr: "eğlence", en: "entertainment" },
  { tr: "heykel", en: "sculpture" },
  { tr: "tepe", en: "hill" },
  { tr: "rahip", en: "priest" },
  { tr: "hakaret", en: "insult" },
  { tr: "teslim etmek", en: "deliver" },
  { tr: "boyun", en: "neck" },
  { tr: "karşısında", en: "opposite" },
  { tr: "yetim", en: "orphan" },
  { tr: "hizmetçi", en: "servant" },
  { tr: "çorak", en: "barren" },
  { tr: "düzenli", en: "tidy" },
  { tr: "olmadıkça", en: "unless" },
  { tr: "durumunda", en: "in case" },
  { tr: "bütün", en: "whole" },
  { tr: "buna karşılık", en: "whereas" },
  { tr: "şişmiş", en: "blown" },
  { tr: "olmasına rağmen", en: "although, even though" },
  { tr: "emmek", en: "suck up" },
  { tr: "su birikintisi", en: "pond" },
  { tr: "soymak", en: "rob, to peel" },
  { tr: "kasırga", en: "tornado" },
  { tr: "hortum", en: "waterspout" },
  { tr: "çavuş", en: "sergeant" },
  { tr: "incitmek", en: "hurt" },
  { tr: "biri", en: "ones" },
  { tr: "tatil", en: "vacation" },
  { tr: "kaşıntı", en: "rash" },
  { tr: "sokmak", en: "sting" },
  { tr: "garip, yabancı", en: "strange" },
  { tr: "zorlanmak", en: "trouble" },
  { tr: "tüm, bütün", en: "entire" },
  { tr: "bahar", en: "spring" },
  { tr: "kulak", en: "ear" },
  { tr: "inmek", en: "land" },
  { tr: "şiş, şişmek, kabarmak", en: "swell" },
  { tr: "binmek", en: "board" },
  { tr: "sayesinde", en: "through" },
  { tr: "nokta", en: "point" },
  { tr: "çiçeklenme, polen", en: "bloom" },
  { tr: "kapı kolu", en: "doorknob" },
  { tr: "yetişkin", en: "adult" },
  { tr: "silmek, darbe", en: "blow" },
  { tr: "yaygın, genel", en: "common" },
  { tr: "boğaz ağrısı", en: "throat sore" },
  { tr: "burun", en: "nose" },
  { tr: "kaşıntı", en: "itch" },
  { tr: "hapşurmak", en: "sneez" },
  { tr: "soğuk algınlığı", en: "common cold" },
  { tr: "hapsolmak", en: "trapped" },
  { tr: "sıkışmış", en: "jammed" },
  { tr: "yapıştırılmış", en: "glued" },
  { tr: "dama", en: "checker" },
  { tr: "uçmak", en: "flew" },
  { tr: "benimsemek", en: "adopt" },
  { tr: "hükümet", en: "government" },
  { tr: "ulusal", en: "national" },
  { tr: "fabrika, tesis, bitki", en: "plant" },
  { tr: "öksürmek", en: "cough" },
  { tr: "kabuk, bağırmak", en: "bark" },
  { tr: "ilaç", en: "pill" },
  { tr: "metre", en: "feet" },
  { tr: "domuz", en: "pig" },
  { tr: "tuzak", en: "trap" },
  { tr: "bitki", en: "plant" },
  { tr: "toplamak", en: "pick" },
  { tr: "kasaba", en: "town" },
  { tr: "almak", en: "pick up" },
  { tr: "kirletmek", en: "pollute" },
  { tr: "tarım arazisi", en: "farmland" },
  { tr: "sel", en: "flood" },
  { tr: "yağmur ormanları", en: "rainforest" },
  { tr: "nehir", en: "river" },
  { tr: "erimek", en: "melt" },
  { tr: "getirmek", en: "bring" },
  { tr: "tarak", en: "comb" },
  { tr: "gülmek", en: "laugh" },
  { tr: "eldiven", en: "glove" },
  { tr: "vahşi", en: "wild" },
  { tr: "diş fırçası", en: "toothbrush" },
  { tr: "sakız", en: "gum" },
  { tr: "ataç", en: "paper clip" },
  { tr: "çekmece", en: "drawer" },
  { tr: "banyo", en: "bathroom" },
  { tr: "göz kırpmak", en: "blink" },
  { tr: "çene", en: "chin" },
  { tr: "lastik", en: "rubber" },
  { tr: "yüksek", en: "loud" },
  { tr: "pijama", en: "slumber" },
  { tr: "geçirmek, harcamak", en: "spend" },
  { tr: "sıkıştırılmış", en: "stuck" },
  { tr: "üzerinde", en: "over" },
  { tr: "belirtmek", en: "loom" },
  { tr: "taşımak", en: "carry" },
  { tr: "ulaşmak", en: "reach" },
  { tr: "oda, boş", en: "room" },
  { tr: "katı", en: "solid" },
  { tr: "geriye kalan", en: "rest" },
  { tr: "karınca", en: "ant" },
  { tr: "tek", en: "sole" },
  { tr: "bir seferde birkaç tane", en: "a few at a time" },
  { tr: "emeklemek, sürünmek", en: "crawl" },
  { tr: "arada bir", en: "once in a while" },
  { tr: "fıstık ezmesi", en: "peanut butter" },
  { tr: "yerine", en: "instead" },
  { tr: "tahıl", en: "grain" },
  { tr: "yulaf ezmesi", en: "oatmeal" },
  { tr: "lezzetli", en: "tasty" },
  { tr: "parlak", en: "shiny" },
  { tr: "servis aracı", en: "shuttle" },
  { tr: "böcek, haşara", en: "insect" },
  { tr: "şempanze", en: "chimp" },
  { tr: "tür", en: "kind" },
  { tr: "insanlık", en: "mankind" },
  { tr: "kemik", en: "bone" },
  { tr: "sıçrama", en: "leap" },
  { tr: "çok büyük, devasa", en: "giant" },
  { tr: "bayrak", en: "flag" },
  { tr: "kaba", en: "mean" },
  { tr: "zorba", en: "bully" },
  { tr: "ağız, pence", en: "jaws" },
  { tr: "şeritli, çizgili", en: "stripe" },
  { tr: "havlamak", en: "bark" },
  { tr: "yakalamak", en: "fetch" },
  { tr: "ötesinde", en: "beyond" },
  { tr: "evcil hayvan", en: "pet" },
  { tr: "sadık", en: "loyal" },
  { tr: "kriz", en: "crisis" },
  { tr: "hile, oyun", en: "trick" },
  { tr: "el sıkışmak, tokalaşmak", en: "shake hand" },
  { tr: "zorlukların üstesinden gelmek", en: "jump through hoops" },
  { tr: "uzakta", en: "away" },
  { tr: "atmak, fırlatmak", en: "threw" },
  { tr: "dondurulmuş", en: "frozen" },
  { tr: "çubuk", en: "stick" },
  { tr: "karıştırmak", en: "stirring" },
  { tr: "yol açmak, liderlik etmek", en: "lead" },
  { tr: "turta", en: "pie" },
  { tr: "göl", en: "lake" },
  { tr: "eşit", en: "equal" },
  { tr: "sundurma, veranda", en: "porch" },
  { tr: "bölmek", en: "divide" },
  { tr: "uzay", en: "outer space" },
  { tr: "yeryüzü", en: "planet" },
  { tr: "yansıma, geri dönüş", en: "rearview" },
  { tr: "ön", en: "front" },
  { tr: "tersten", en: "reverse" },
  { tr: "evlat edinme, sahiplenme", en: "adopt" },
  { tr: "kaymak", en: "slipping" },
  { tr: "ayna", en: "mirror" },
  { tr: "çivi", en: "spike" },
  { tr: "yalamak", en: "lick" },
  { tr: "kurbağa", en: "frog" },
  { tr: "donmak", en: "freeze" },
  { tr: "tırmanıcı", en: "climbers" },
  { tr: "köşe", en: "edge" },
  { tr: "mektup, harf", en: "letter" },
  { tr: "sallanmak, sallama", en: "swing" },
  { tr: "koşucu", en: "jogger" },
  { tr: "şelale", en: "waterfall" },
  { tr: "koşu yapmak", en: "jogging" },
  { tr: "eksen", en: "axe" },
  { tr: "saatte", en: "per hour" },
  { tr: "sırasında, esnasında", en: "during" },
  { tr: "düşmek", en: "stall" },
  { tr: "akışkan", en: "flow" },
  { tr: "denizci", en: "sailor" },
  { tr: "yolcu", en: "passenger" },
  { tr: "güverte", en: "deck" },
  { tr: "hastalar", en: "patients" },
  { tr: "hastalık", en: "sickness" },
  { tr: "tabak", en: "plate" },
  { tr: "yayılmak", en: "spread" },
  { tr: "alet, araç", en: "tool" },
  { tr: "giymek", en: "put on" },
  { tr: "hasta", en: "ill" },
  { tr: "ışık, hafif", en: "light" },
  { tr: "zemin", en: "ground" },
  { tr: "üzerinde", en: "above" },
  { tr: "güneşte yatmak", en: "lie in the sun" },
  { tr: "ince", en: "thin" },
  { tr: "tıknaz, küçük ve kısa", en: "chunky" },
  { tr: "yumuşak", en: "soft" },
  { tr: "tedavi etmek", en: "treat" },
  { tr: "parça", en: "piece" },
  { tr: "kalın", en: "thick" },
  { tr: "hücre", en: "cell" },
  { tr: "toz", en: "dust" },
  { tr: "cilt, deri", en: "skin" },
  { tr: "banyo", en: "bath" },
  { tr: "uzatmak, germek", en: "stretch" },
  { tr: "onarmak, düzenlemek", en: "mend" },
  { tr: "mikrop", en: "germ" },
  { tr: "düzlük", en: "flat" },
  { tr: "köprü", en: "bridge" },
  { tr: "toprak, kirli", en: "dirt" },
  { tr: "büyümek", en: "grow" },
  { tr: "seviye", en: "level" },
  { tr: "koy, körfez", en: "bay" },
  { tr: "geniş", en: "wide" },
  { tr: "dökülmek", en: "flake off" },
  { tr: "toprak, arazi", en: "land" },
  { tr: "kaya", en: "rock" },
  { tr: "odun", en: "wood" },
  { tr: "eşitlemek", en: "leveled" },
  { tr: "yol", en: "road" },
  { tr: "kum", en: "sand" },
  { tr: "doldurmak", en: "fill" },
  { tr: "dolaşmak, gezmek", en: "get around" },
  { tr: "etrafında, çevresinde", en: "around" },
  { tr: "izin vermek", en: "allow" },
  { tr: "keşfetmek", en: "explore" },
  { tr: "telik hakkı", en: "copyright" },
  { tr: "maliyet", en: "cost" },
  { tr: "yavaşlamak", en: "decelerate" },
  { tr: "her şeye rağmen", en: "nonetheless" },
  { tr: "ilgilendirmek", en: "concern" },
  { tr: "asansör", en: "elevator" },
  { tr: "çelik", en: "steel" },
  { tr: "son", en: "recent" },
  { tr: "vadesi dolmuş", en: "due" },
  { tr: "bu nedenle", en: "therefore" },
  { tr: "kaldırım", en: "pavement" },
  { tr: "suya dayanıklı", en: "waterproof" },
  { tr: "sıcaklık, ısıtmak", en: "heat" },
  { tr: "servis", en: "serve" },
  { tr: "en kısa sürede", en: "as soon as" },
  { tr: "geleneksel", en: "traditional" },
  { tr: "fırın", en: "bakery" },
  { tr: "cesur", en: "brave" },
  { tr: "çare,tedavi", en: "cure" },
  { tr: "neredeyse", en: "nearly" },
  { tr: "öfke", en: "anger" },
  { tr: "düşkün", en: "fond" },
  { tr: "cihaz", en: "device" },
  { tr: "dahil olmak", en: "include" },
  { tr: "sorumluluk sahibi", en: "responsible" },
  { tr: "zarar", en: "harm" },
  { tr: "akşam yemeği", en: "supper" },
  { tr: "malzemeler", en: "ingredients" },
  { tr: "uzman", en: "expert" },
  { tr: "terfi ettirmek", en: "promote" },
  { tr: "olup olmadığını", en: "whether" },
  { tr: "ön plan", en: "foreground" },
  { tr: "geri dönüştürmek", en: "recycle" },
  { tr: "vahşi yaşam", en: "wildlife" },
  { tr: "tartışma", en: "discussion" },
  { tr: "bilgi", en: "knowledge" },
  { tr: "temel", en: "fundamental" },
  { tr: "azaltmak", en: "reduce" },
  { tr: "evde eğitim", en: "homeschool" },
  { tr: "baharatlı", en: "spicy" },
  { tr: "önemli", en: "significant" },
  { tr: "lazım", en: "ought" },
  { tr: "belgesel", en: "documentary" },
  { tr: "alınmak", en: "mind" },
  { tr: "var olmak", en: "exist" },
  { tr: "yeniden kullanmak", en: "reuse" },
  { tr: "inkar etmek", en: "deny" },
  { tr: "borcu olmak", en: "owe" },
  { tr: "kabullenmek", en: "acknowledge" },
  { tr: "yoksun olmak", en: "lack" },
  { tr: "kira", en: "rent" },
  { tr: "uymak", en: "suit" },
  { tr: "oluşmak", en: "consist" },
  { tr: "mucit", en: "inventor" },
  { tr: "fark etmek", en: "notice" },
  { tr: "görünmek", en: "appear" },
  { tr: "algılamak", en: "perceive" },
  { tr: "elde etmek", en: "obtain" },
  { tr: "anlamak", en: "recognize" },
  { tr: "sanmak", en: "suppose" },
  { tr: "benzemek", en: "resemble" },
  { tr: "unutmak", en: "forget" },
  { tr: "ait olmak", en: "belong" },
  { tr: "kastetmek", en: "mean" },
  { tr: "hatırlamak", en: "remember" },
  { tr: "içermek", en: "contain" },
  { tr: "ummak", en: "hope" },
  { tr: "farkına varmak", en: "realise" },
  { tr: "dikkate almak", en: "consider" },
  { tr: "kuşkulanmak", en: "suspect" },
  { tr: "tercih etmek", en: "prefer" },
  { tr: "merak etmek", en: "wonder" },
  { tr: "cezbetmek", en: "appeal" },
  { tr: "kıskanmak", en: "envy" },
  { tr: "güvenmek", en: "trust" },
  { tr: "şüphe duymak", en: "doubt" },
  { tr: "hayal etmek", en: "imagine" },
  { tr: "taktir etmek", en: "appreciate" },
  { tr: "önemsemek", en: "care" },
  { tr: "nefret etmek", en: "detest" },
  { tr: "dilemek", en: "wish" },
  { tr: "arzulamak", en: "desire" },
  { tr: "bağışlamak", en: "forgive" },
  { tr: "meydana gelmek", en: "occur" },
];

module.exports = Words;