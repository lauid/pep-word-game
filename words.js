/*
 * PEP 小学英语 三~五年级 单词库（人教版 · 三年级起点 · 经典版）
 * 结构： { "3上": [ {unit, words: [[英文, 中文], ...]}, ... ], ... }
 * 词库可按 年级 + 册 + 单元 抽取，供连连看游戏动态组局。
 */
const PEP_WORDS = {
  "3上": [
    { unit: "Unit 1 Hello!", words: [
      ["ruler","尺子"],["pencil","铅笔"],["eraser","橡皮"],["crayon","蜡笔"],
      ["bag","书包"],["pen","钢笔"],["pencil box","铅笔盒"],["book","书"],
      ["no","不"],["your","你(们)的"]
    ]},
    { unit: "Unit 2 Colours", words: [
      ["red","红色"],["green","绿色"],["yellow","黄色"],["blue","蓝色"],
      ["black","黑色"],["brown","棕色"],["white","白色"],["orange","橙色"],
      ["OK","好"],["mum","妈妈"]
    ]},
    { unit: "Unit 3 Look at me", words: [
      ["face","脸"],["ear","耳朵"],["eye","眼睛"],["nose","鼻子"],
      ["mouth","嘴"],["arm","胳膊"],["hand","手"],["head","头"],
      ["body","身体"],["leg","腿"],["foot","脚"],["school","学校"]
    ]},
    { unit: "Unit 4 We love animals", words: [
      ["duck","鸭子"],["pig","猪"],["cat","猫"],["bear","熊"],
      ["dog","狗"],["elephant","大象"],["monkey","猴子"],["bird","鸟"],
      ["tiger","老虎"],["panda","熊猫"],["zoo","动物园"],["funny","滑稽的"]
    ]},
    { unit: "Unit 5 Let's eat", words: [
      ["bread","面包"],["juice","果汁"],["egg","蛋"],["milk","牛奶"],
      ["water","水"],["cake","蛋糕"],["fish","鱼"],["rice","米饭"]
    ]},
    { unit: "Unit 6 Happy birthday", words: [
      ["one","一"],["two","二"],["three","三"],["four","四"],
      ["five","五"],["six","六"],["seven","七"],["eight","八"],
      ["nine","九"],["ten","十"],["brother","兄；弟"],["plate","盘子"]
    ]}
  ],
  "3下": [
    { unit: "Unit 1 Welcome back", words: [
      ["UK","英国"],["Canada","加拿大"],["USA","美国"],["China","中国"],
      ["she","她"],["he","他"],["student","学生"],["pupil","小学生"],
      ["teacher","教师"],["boy","男孩"],["girl","女孩"],["friend","朋友"],
      ["new","新的"],["today","今天"]
    ]},
    { unit: "Unit 2 My family", words: [
      ["father","父亲"],["dad","爸爸"],["man","男人"],["woman","女人"],
      ["mother","母亲"],["sister","姐妹"],["brother","兄弟"],
      ["grandmother","祖母"],["grandma","奶奶"],["grandfather","祖父"],
      ["grandpa","爷爷"],["family","家庭"]
    ]},
    { unit: "Unit 3 At the zoo", words: [
      ["thin","瘦的"],["fat","胖的"],["tall","高的"],["short","矮的"],
      ["long","长的"],["small","小的"],["big","大的"],["giraffe","长颈鹿"],["deer","鹿"]
    ]},
    { unit: "Unit 4 Where is my car?", words: [
      ["on","在…上"],["in","在…里"],["under","在…下面"],["chair","椅子"],
      ["desk","书桌"],["cap","帽子"],["ball","球"],["car","小汽车"],
      ["boat","小船"],["map","地图"],["toy","玩具"],["box","盒"]
    ]},
    { unit: "Unit 5 Do you like pears?", words: [
      ["pear","梨"],["apple","苹果"],["orange","橙子"],["banana","香蕉"],
      ["watermelon","西瓜"],["strawberry","草莓"],["grape","葡萄"],
      ["buy","买"],["fruit","水果"]
    ]},
    { unit: "Unit 6 How many?", words: [
      ["eleven","十一"],["twelve","十二"],["thirteen","十三"],["fourteen","十四"],
      ["fifteen","十五"],["sixteen","十六"],["seventeen","十七"],
      ["eighteen","十八"],["nineteen","十九"],["twenty","二十"],
      ["kite","风筝"],["beautiful","美丽的"]
    ]}
  ],
  "4上": [
    { unit: "Unit 1 My classroom", words: [
      ["classroom","教室"],["window","窗户"],["blackboard","黑板"],["light","电灯"],
      ["picture","图画"],["door","门"],["teacher's desk","讲台"],["computer","计算机"],
      ["fan","风扇"],["wall","墙壁"],["floor","地板"],["clean","打扫"],["help","帮助"]
    ]},
    { unit: "Unit 2 My schoolbag", words: [
      ["schoolbag","书包"],["maths book","数学书"],["English book","英语书"],
      ["Chinese book","语文书"],["storybook","故事书"],["candy","糖果"],
      ["notebook","笔记本"],["key","钥匙"],["cute","可爱的"],["lost","丢失"]
    ]},
    { unit: "Unit 3 My friends", words: [
      ["strong","强壮的"],["friendly","友好的"],["quiet","安静的"],["hair","头发"],
      ["shoe","鞋"],["glasses","眼镜"],["his","他的"],["or","或者"],
      ["right","对的"],["hat","帽子"],["her","她的"]
    ]},
    { unit: "Unit 4 My home", words: [
      ["bedroom","卧室"],["living room","客厅"],["study","书房"],["kitchen","厨房"],
      ["bathroom","浴室"],["bed","床"],["phone","电话"],["table","桌子"],
      ["sofa","沙发"],["fridge","冰箱"],["find","找到"],["them","他们"]
    ]},
    { unit: "Unit 5 Dinner's ready", words: [
      ["beef","牛肉"],["chicken","鸡肉"],["noodles","面条"],["soup","汤"],
      ["vegetable","蔬菜"],["chopsticks","筷子"],["bowl","碗"],["fork","餐叉"],
      ["knife","刀"],["spoon","勺"],["dinner","晚餐"],["ready","准备好"],["pass","递"]
    ]},
    { unit: "Unit 6 Meet my family", words: [
      ["parents","父母"],["cousin","同辈表亲"],["uncle","叔叔"],["aunt","阿姨"],
      ["baby brother","婴儿小弟弟"],["doctor","医生"],["cook","厨师"],["driver","司机"],
      ["farmer","农民"],["nurse","护士"],["people","人们"],["little","小的"],
      ["puppy","小狗"],["job","工作"],["basketball","篮球"]
    ]}
  ],
  "4下": [
    { unit: "Unit 1 My school", words: [
      ["first floor","一楼"],["second floor","二楼"],["teacher's office","教师办公室"],
      ["library","图书馆"],["playground","操场"],["computer room","计算机房"],
      ["art room","美术教室"],["music room","音乐教室"],["next to","紧邻"],
      ["homework","作业"],["class","班级"],["forty","四十"],["way","方向"]
    ]},
    { unit: "Unit 2 What time is it", words: [
      ["breakfast","早餐"],["English class","英语课"],["lunch","午餐"],
      ["music class","音乐课"],["PE class","体育课"],["dinner","晚餐"],
      ["get up","起床"],["go to school","去上学"],["go home","回家"],
      ["go to bed","上床睡觉"],["over","结束"],["now","现在"],["o'clock","…点钟"],
      ["kid","小孩"],["thirty","三十"]
    ]},
    { unit: "Unit 3 Weather", words: [
      ["cold","冷的"],["cool","凉爽的"],["warm","暖和的"],["hot","热的"],
      ["sunny","晴朗的"],["windy","多风的"],["cloudy","多云的"],["snowy","下雪的"],
      ["rainy","多雨的"],["outside","在户外"],["weather","天气"],["world","世界"]
    ]},
    { unit: "Unit 4 At the farm", words: [
      ["tomato","西红柿"],["potato","土豆"],["green beans","豆角"],["carrot","胡萝卜"],
      ["horse","马"],["cow","奶牛"],["sheep","绵羊"],["hen","母鸡"],
      ["these","这些"],["animal","动物"],["those","那些"],["garden","花园"],
      ["farm","农场"],["goat","山羊"],["eat","吃"]
    ]},
    { unit: "Unit 5 My clothes", words: [
      ["clothes","衣服"],["pants","裤子"],["hat","帽子"],["dress","连衣裙"],
      ["skirt","女裙"],["coat","外衣"],["sweater","毛衣"],["sock","袜子"],
      ["shorts","短裤"],["jacket","夹克"],["shirt","衬衫"],["whose","谁的"]
    ]},
    { unit: "Unit 6 Shopping", words: [
      ["glove","手套"],["scarf","围巾"],["umbrella","雨伞"],["sunglasses","太阳镜"],
      ["pretty","漂亮的"],["expensive","昂贵的"],["cheap","便宜的"],["nice","好的"],
      ["try on","试穿"],["size","尺码"],["how much","多少钱"],["eighty","八十"],
      ["dollar","美元"],["sale","特价"]
    ]}
  ],
  "5上": [
    { unit: "Unit 1 What's he like?", words: [
      ["old","年老的"],["young","年轻的"],["funny","滑稽的"],["kind","和蔼的"],
      ["strict","严格的"],["polite","有礼貌的"],["hard-working","勤奋的"],
      ["clever","聪明的"],["shy","害羞的"],["know","知道"],["our","我们的"],
      ["robot","机器人"],["speak","说"],["finish","完成"]
    ]},
    { unit: "Unit 2 My week", words: [
      ["Monday","星期一"],["Tuesday","星期二"],["Wednesday","星期三"],
      ["Thursday","星期四"],["Friday","星期五"],["Saturday","星期六"],
      ["Sunday","星期天"],["weekend","周末"],["wash","洗"],["watch","看"],
      ["read","读"],["play","玩"],["cooking","烹饪"],["often","常常"],
      ["park","公园"],["sport","运动"]
    ]},
    { unit: "Unit 3 What would you like?", words: [
      ["sandwich","三明治"],["salad","沙拉"],["hamburger","汉堡"],["ice cream","冰淇淋"],
      ["tea","茶"],["fresh","新鲜的"],["healthy","健康的"],["delicious","美味的"],
      ["hot","辣的"],["sweet","甜的"],["drink","喝"],["thirsty","口渴的"],
      ["favourite","最喜欢的"],["food","食物"],["onion","洋葱"]
    ]},
    { unit: "Unit 4 What can you do?", words: [
      ["sing","唱"],["song","歌曲"],["dance","跳舞"],["draw","画"],
      ["cartoon","漫画"],["cook","烹饪"],["swim","游泳"],["party","聚会"],
      ["wonderful","了不起的"],["learn","学"],["problem","问题"],["want","想要"],
      ["send","发送"],["kung fu","功夫"]
    ]},
    { unit: "Unit 5 There is a big bed", words: [
      ["clock","时钟"],["plant","植物"],["bottle","瓶子"],["bike","自行车"],
      ["photo","照片"],["in front of","在…前面"],["between","在…之间"],
      ["above","在…上面"],["beside","在…旁边"],["behind","在…后面"],
      ["there","那里"],["their","他们的"],["house","房屋"],["flower","花"],
      ["dirty","肮脏的"],["mouse","老鼠"],["live","居住"],["nature","自然"]
    ]},
    { unit: "Unit 6 In a nature park", words: [
      ["forest","森林"],["river","河流"],["lake","湖泊"],["mountain","高山"],
      ["hill","小山"],["tree","树木"],["bridge","桥"],["building","建筑物"],
      ["village","村庄"],["house","房子"],["boating","划船"],["rabbit","兔子"],["high","高的"]
    ]}
  ],
  "5下": [
    { unit: "Unit 1 My day", words: [
      ["eat breakfast","吃早饭"],["do morning exercises","做早操"],["eat dinner","吃晚饭"],
      ["clean my room","打扫房间"],["go for a walk","散步"],["go shopping","购物"],
      ["take a dancing class","上舞蹈课"],["when","什么时候"],["after","在…后"],
      ["start","开始"],["usually","通常"],["late","迟的"],["why","为什么"],
      ["busy","忙的"],["always","总是"],["island","岛"],["win","获胜"]
    ]},
    { unit: "Unit 2 My favourite season", words: [
      ["spring","春天"],["summer","夏天"],["autumn","秋天"],["winter","冬天"],
      ["season","季节"],["go on a picnic","去野餐"],["pick apples","摘苹果"],
      ["make a snowman","堆雪人"],["go swimming","去游泳"],["which","哪一个"],
      ["best","最"],["snow","雪"],["because","因为"],["vacation","假期"],
      ["lovely","可爱的"],["fall","落下"]
    ]},
    { unit: "Unit 3 My school calendar", words: [
      ["January","一月"],["February","二月"],["March","三月"],["April","四月"],
      ["May","五月"],["June","六月"],["July","七月"],["August","八月"],
      ["September","九月"],["October","十月"],["November","十一月"],["December","十二月"],
      ["few","不多"],["meet","聚会"],["trip","旅行"],["year","年"],
      ["contest","比赛"],["holiday","假日"]
    ]},
    { unit: "Unit 4 When is Easter?", words: [
      ["first","第一"],["second","第二"],["third","第三"],["fourth","第四"],
      ["fifth","第五"],["twelfth","第十二"],["twentieth","第二十"],
      ["twenty-first","第二十一"],["twenty-third","第二十三"],["thirtieth","第三十"],
      ["special","特别的"],["festival","节日"],["kitten","小猫"],["diary","日记"]
    ]},
    { unit: "Unit 5 Whose dog is it?", words: [
      ["mine","我的"],["yours","你的"],["his","他的"],["hers","她的"],
      ["theirs","他们的"],["ours","我们的"],["each","每个"],["excited","兴奋的"],
      ["climb","爬"]
    ]},
    { unit: "Unit 6 Work quietly", words: [
      ["doing","正在做"],["eating","正在吃"],["reading","正在读"],["singing","正在唱"],
      ["playing","正在玩"],["sleeping","正在睡"],["keep","保持"],["turn","顺序"],
      ["bamboo","竹子"],["its","它的"],["teach","教"],["sushi","寿司"],["Spanish","西班牙的"]
    ]}
  ],
  "6上": [
    { unit: "Unit 1 How can I get there?", words: [
      ["science","科学"],["museum","博物馆"],["post office","邮局"],["bookstore","书店"],
      ["cinema","电影院"],["hospital","医院"],["crossing","十字路口"],["turn","转弯"],
      ["left","左"],["straight","笔直地"],["right","右"],["ask","问"],["sir","先生"],
      ["interesting","有趣的"],["Italian","意大利的"],["restaurant","餐馆"],["pizza","比萨饼"],
      ["street","大街"],["get","到达"],["GPS","全球定位系统"],["gave","提供；交给"],
      ["feature","特点"],["follow","跟着"],["far","远的"],["tell","告诉"]
    ]},
    { unit: "Unit 2 Ways to go to school", words: [
      ["on foot","步行"],["by","乘"],["bus","公共汽车"],["plane","飞机"],["taxi","出租汽车"],
      ["ship","船"],["subway","地铁"],["train","火车"],["slow","慢的"],["down","减少"],
      ["slow down","慢下来"],["stop","停下"],["Mrs","夫人"],["early","早到的"],
      ["helmet","头盔"],["must","必须"],["wear","穿戴"],["attention","注意"],
      ["pay attention to","注意"],["traffic","交通"],["traffic lights","交通信号灯"],
      ["Munich","慕尼黑"],["Germany","德国"],["Alaska","阿拉斯加"],["sled","雪橇"],
      ["fast","快的"],["ferry","轮渡"],["Scotland","苏格兰"]
    ]},
    { unit: "Unit 3 My weekend plan", words: [
      ["visit","拜访"],["film","电影"],["see a film","看电影"],["trip","旅行"],
      ["take a trip","去旅行"],["supermarket","超市"],["evening","晚上"],
      ["tonight","今晚"],["tomorrow","明天"],["next week","下周"],["dictionary","词典"],
      ["comic","滑稽的"],["comic book","连环画册"],["word","单词"],["word book","单词书"],
      ["postcard","明信片"],["lesson","课"],["space","太空"],["travel","旅行"],
      ["half","一半"],["price","价格"],["Mid-Autumn Festival","中秋节"],["together","一起"],
      ["get together","聚会"],["mooncake","月饼"],["poem","诗"],["moon","月亮"]
    ]},
    { unit: "Unit 4 I have a pen pal", words: [
      ["studies","学习"],["puzzle","谜"],["hiking","远足"],["pen pal","笔友"],
      ["hobby","业余爱好"],["jasmine","茉莉"],["idea","想法"],["Canberra","堪培拉"],
      ["amazing","令人惊奇的"],["shall","将要"],["goal","射门"],["join","加入"],
      ["club","俱乐部"],["share","分享"]
    ]},
    { unit: "Unit 5 What does he do?", words: [
      ["factory","工厂"],["worker","工人"],["postman","邮递员"],["businessman","商人"],
      ["police officer","警察"],["fisherman","渔民"],["scientist","科学家"],["pilot","飞行员"],
      ["coach","教练"],["country","国家"],["head teacher","校长"],["sea","大海"],
      ["stay","保持"],["university","大学"],["gym","体育馆"],["if","如果"],["reporter","记者"],
      ["use","使用"],["type","打字"],["quickly","迅速地"],["secretary","秘书"]
    ]},
    { unit: "Unit 6 How do you feel?", words: [
      ["angry","生气的"],["afraid","害怕的"],["sad","难过的"],["worried","担心的"],
      ["happy","高兴的"],["see a doctor","看病"],["wear","穿戴"],["more","更多的"],
      ["deep","深的"],["breath","呼吸"],["take a deep breath","深深吸一口气"],["count","数数"],
      ["count to ten","数到十"],["chase","追赶"],["mice","老鼠"],["bad","坏的"],["hurt","使受伤"],
      ["ill","不舒服的"],["wrong","有毛病的"],["should","应当"],["feel","感觉"],["well","健康的"],
      ["sit","坐"],["grass","草坪"],["hear","听见"],["ant","蚂蚁"],["worry","担心"],
      ["stuck","陷住"],["mud","泥"],["pull","拉"],["everyone","每人"]
    ]}
  ],
  "6下": [
    { unit: "Unit 1 How tall are you?", words: [
      ["younger","更年轻的"],["older","更年长的"],["taller","更高的"],["shorter","更矮的；更短的"],
      ["longer","更长的"],["thinner","更瘦的"],["heavier","更重的"],["bigger","更大的"],
      ["smaller","更小的"],["stronger","更强壮的"],["dinosaur","恐龙"],["hall","大厅"],
      ["metre","米"],["than","比"],["both","两个都"],["kilogram","千克"],["countryside","乡村"],
      ["lower","更低的"],["shadow","影子"],["smarter","更聪明的"],["become","开始变得"]
    ]},
    { unit: "Unit 2 Last weekend", words: [
      ["cleaned","打扫（过去式）"],["stayed","停留（过去式）"],["washed","洗（过去式）"],
      ["watched","看（过去式）"],["had","有（过去式）"],["had a cold","感冒"],["slept","睡觉（过去式）"],
      ["read","读（过去式）"],["saw","看见（过去式）"],["last","最近的"],["weekend","周末"],
      ["drank","喝（过去式）"],["showed","给…看（过去式）"],["better","更好的"],["faster","更快的"],
      ["hotel","旅馆"],["fixed","修理（过去式）"],["broke","损坏（过去式）"],["lamp","台灯"],
      ["loud","喧闹的"],["enjoy","享受"],["stay","暂住"]
    ]},
    { unit: "Unit 3 Where did you go?", words: [
      ["went","去（过去式）"],["camp","野营"],["went camping","去野营"],["fish","钓鱼"],
      ["went fishing","去钓鱼"],["rode","骑（过去式）"],["horse","马"],["rode a horse","骑马"],
      ["hurt","使受伤（过去式）"],["ate","吃（过去式）"],["ate fresh food","吃新鲜食物"],
      ["took","拍照（过去式）"],["took pictures","照相"],["bought","买（过去式）"],["gift","礼物"],
      ["fell","摔倒（过去式）"],["fell off","跌落"],["Turkey","土耳其"],["beach","海滩"],
      ["mule","骡子"],["could","能（过去式）"],["till","直到"],["basket","篮；筐"],
      ["part","一部分"],["licked","舔（过去式）"],["laughed","笑（过去式）"]
    ]},
    { unit: "Unit 4 Then and now", words: [
      ["dining hall","饭厅"],["grass","草坪"],["gym","体育馆"],["ago","以前"],
      ["cycling","骑自行车运动"],["go cycling","去骑自行车"],["ice-skate","滑冰"],
      ["badminton","羽毛球运动"],["star","星"],["easy","容易的"],["look up","查阅"],
      ["Internet","互联网"],["different","不同的"],["active","积极的"],["race","赛跑"],
      ["nothing","没有什么"],["thought","想（过去式）"],["felt","感觉（过去式）"],
      ["cheetah","猎豹"],["trip","绊倒"],["woke","醒（过去式）"],["dream","梦"]
    ]}
  ]
};

// 暴露给浏览器全局
if (typeof window !== "undefined") window.PEP_WORDS = PEP_WORDS;
if (typeof module !== "undefined") module.exports = PEP_WORDS;
