import md5 from 'md5';

// Hash the email address to protect personal information
function hashEmail(email) {
  return md5(email.trim().toLowerCase());
}

export default [
    {
      name: "總召組",
      members: [
        { name: "康喔", title: "總召", emailHash: hashEmail("hi@kangjw.me") },
        { name: "柴柴", title: "副召", emailHash: hashEmail("jxu49220@gmail.com") }
      ]
    },
    {
      name: "行政組",
      members: [
        { name: "Windless", title: "組長", emailHash: hashEmail("hi@windless.me") },
        { name: "柴柴", title: "票務", emailHash: hashEmail("jxu49220@gmail.com") }
      ]
    },
    {
      name: "財務組",
      members: [
        { name: "Arnoldsky", title: "組長", emailHash: hashEmail("cboyu528@gmail.com") },
        { name: "Leaf", title: "出納", emailHash: hashEmail("jing838383@gmail.com") },
        { name: "阿公", title: "組員", emailHash: hashEmail("agong961021@gmail.com") }
      ]
    },
    {
      name: "課活組",
      members: [
        { name: "Nelson", title: "組長", emailHash: hashEmail("hi@nelsongx.com") },
        { name: "Ricky", title: "副組長", emailHash: hashEmail("sumily20@gmail.com") },
        { name: "海鷗", title: "組員", emailHash: hashEmail("kyle941010@gmail.com") },
        { name: "Yuki", title: "組員", emailHash: hashEmail("bendoris0509@gmail.com") },
        { name: "Panda", title: "組員", emailHash: hashEmail("wu.messi.wu@gmail.com") },
        { name: "Yoru", title: "組員", emailHash: hashEmail("ben.hrc57@gmail.com") },
        { name: "Kevin", title: "組員", emailHash: hashEmail("fatcattw2039@gmail.com") },
        { name: "EHDW", title: "組員", emailHash: hashEmail("panpeter0813@gmail.com") },
        { name: "亨", title: "組員", emailHash: hashEmail("hi@hans0805.me") }
      ]
    },
    {
      name: "庶務組",
      members: [
        { name: "Fearnot", title: "組長", emailHash: hashEmail("kenin221@gmail.com") },
        { name: "皮蛋", title: "副組長", emailHash: hashEmail("happyh960422@gmail.com") },
        { name: "yimang", title: "組員", emailHash: hashEmail("lucasbbtung@gmail.com") },
        { name: "Lindy", title: "組員", emailHash: hashEmail("lindy.wu.0806@gmail.com") }
      ]
    },
    {
      name: "紀錄組",
      members: [
        { name: "OnCloud", title: "組長", emailHash: hashEmail("anonymousaaaa41414141@gmail.com") },
        { name: "竺原", title: "組員", emailHash: hashEmail("neiljiang064580@gmail.com") },
        { name: "pU", title: "組員", emailHash: hashEmail("lightbulb20070504@gmail.com") },
        { name: "柴柴", title: "組員", emailHash: hashEmail("jxu49220@gmail.com") },
        { name: "康喔", title: "組員", emailHash: hashEmail("hi@kangjw.me") }
      ]
    },
    {
      name: "隊輔組",
      members: [
        { name: "OsGa", title: "組長", emailHash: hashEmail("oscarhuang950324@gmail.com") },
        { name: "咪路", title: "副組長", emailHash: hashEmail("mysteryperson520@gmail.com") },
        { name: "小婕", title: "組員", emailHash: hashEmail("yuiwuuu@gmail.com") },
        { name: "諾諾", title: "組員", emailHash: hashEmail("Jasminederid@gmail.com") },
        { name: "滷味", title: "組員", emailHash: hashEmail("ainini0408@gmail.com") },
        { name: "77", title: "組員", emailHash: hashEmail("qiqihuang0831@gmail.com") },
        { name: "ffting", title: "組員", emailHash: hashEmail("Ting7820249@gmail.com") },
        { name: "好冷吶", title: "組員", emailHash: hashEmail("helenaliu9788@gmail.com") },
        { name: "萊姆", title: "組員", emailHash: hashEmail("slimu.cs@gmail.com") },
        { name: "阿玉", title: "組員", emailHash: hashEmail("p228866543@gmail.com") },
        { name: "末夜", title: "組員", emailHash: hashEmail("miguo1008@gmail.com") },
        { name: "Ak", title: "組員", emailHash: hashEmail("andrew.mutien@gmail.com") },
        { name: "蓋蓋", title: "組員", emailHash: hashEmail("sky9109@gmail.com") },
        { name: "小徐", title: "組員", emailHash: hashEmail("a896458882@gmail.com") },
        { name: "xiung", title: "組員", emailHash: hashEmail("steven19790906@gmail.com") },
        { name: "Yuto", title: "組員", emailHash: hashEmail("wayne71112@gmail.com") },
        { name: "Leo", title: "組員", emailHash: hashEmail("leo2012.c@gmail.com") },
        { name: "Sam", title: "組員", emailHash: hashEmail("lzspriv@gmail.com") },
        { name: "Wolf Yuan", title: "組員", emailHash: hashEmail("wolf@wolf-yuan.dev") },
        { name: "康康", title: "組員", emailHash: hashEmail("jameskang0714@gmail.com") }
      ]
    },
    {
      name: "編輯組",
      members: [
        { name: "橘子", title: "組長", emailHash: hashEmail("tiffanylai.1103@gmail.com") },
        { name: "阿六", title: "副組長", emailHash: hashEmail("hyslchs@gmail.com") },
        { name: "Yuan", title: "組員", emailHash: hashEmail("yuan.ncse.tw@gmail.com") },
        { name: "13", title: "組員", emailHash: hashEmail("aquarius105942@gmail.com") },
        { name: "甲魚", title: "組員", emailHash: hashEmail("rinu.0929w@gmail.com") },
        { name: "宸", title: "組員", emailHash: hashEmail("s1251053@gm.ncue.edu.tw") },
        { name: "Mina", title: "組員", emailHash: hashEmail("mina.mj.chen@gmail.com") },
        { name: "庭", title: "組員", emailHash: hashEmail("shenkaiting00@gmail.com") }
      ]
    },
    {
      name: "行銷組",
      members: [
        { name: "Denny Huang", title: "組長", emailHash: hashEmail("denny0223@gmail.com") }
      ]
    },
    {
      name: "資訊組",
      members: [
        { name: "毛哥EM", title: "組長", emailHash: hashEmail("elvismao.070512@gmail.com") },
        { name: "Wolf Yuan", title: "組員", emailHash: hashEmail("wolf@wolf-yuan.dev") },
        { name: "KoukeNeko", title: "組員", emailHash: hashEmail("doeshing@gmail.com") },
        { name: "!Tony2100", title: "組員", emailHash: hashEmail("tony2561231@gmail.com") }
      ]
    },
    {
      name: "設計組",
      members: [
        { name: "兆翌", title: "組長", emailHash: hashEmail("michaeltseng9262@gmail.com") },
        { name: "雞心", title: "組員", emailHash: hashEmail("chengjoyce2005@gmail.com") },
        { name: "Henry", title: "組員", emailHash: hashEmail("heutemx@gmail.com") },
        { name: "花椰", title: "組員", emailHash: hashEmail("zxcv50533@gmail.com") },
        { name: "開根號", title: "組員", emailHash: hashEmail("b6q9i1@gmail.com") },
        { name: "章魚", title: "組員", emailHash: hashEmail("yutongzhang290@gmail.com") },
        { name: "秋刀魚", title: "組員", emailHash: hashEmail("st8102130@gmail.com") },
        { name: "kiki", title: "組員", emailHash: hashEmail("411335036@gms.ndhu.edu.tw") },
        { name: "毛哥EM", title: "組員", emailHash: hashEmail("elvismao.070512@gmail.com") }
      ]
    }
]