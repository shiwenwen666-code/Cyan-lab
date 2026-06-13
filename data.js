const GENERAL_SCENE_CATEGORY = "不限定具体品类 / 通用场景氛围";

const industryNames = [
  "农业与养殖", "食品饮料与生鲜供应", "能源电力与设施", "家居生活", "厨房与餐饮用品",
  "工业机械", "工业设备与零部件", "制造与定制加工", "建筑工程", "建材与房地产",
  "通信与网络设备", "仓储物流设备", "五金工具", "电气电工", "仪器仪表",
  "自动化与机器人", "环保设备", "管道阀门与泵", "实验室与化工用品", "安全防护用品",
  "家居装饰", "节庆派对用品", "母婴用品", "浴室用品", "智能家居", "医疗器械和用品",
  "箱包旅行用品", "美妆个护", "宠物用品", "食品饮料", "厨房用品", "办公文具",
  "运动户外", "服饰配件", "珠宝饰品", "3C 数码配件", "汽车用品", "清洁用品",
  "园艺用品", "玩具礼品"
];

const scenePresets = {
  "农业与养殖": ["温室种植", "智慧农场", "养殖设施", "农产品分拣"],
  "食品饮料与生鲜供应": ["冷链仓储", "生鲜陈列", "食品加工", "饮品展示"],
  "能源电力与设施": ["电力设施", "新能源场站", "储能空间", "运维场景"],
  "工业机械": ["工厂车间", "机械展示", "生产线", "设备维护"],
  "工业设备与零部件": ["零部件陈列", "装配工位", "金属加工", "质检台面"],
  "制造与定制加工": ["加工车间", "定制样品间", "生产流程", "材料展示"],
  "建筑工程": ["施工现场", "工程材料区", "结构空间", "安全通道"],
  "建材与房地产": ["样板空间", "材料展厅", "建筑立面", "室内硬装"],
  "通信与网络设备": ["机房空间", "网络布线", "设备机柜", "通信节点"],
  "仓储物流设备": ["仓储空间", "货架系统", "分拣中心", "装卸区域"],
  "五金工具": ["工具台面", "维修工位", "金属陈列", "工坊空间"],
  "电气电工": ["电控柜", "线缆布置", "电工台面", "配电场景"],
  "仪器仪表": ["检测台面", "实验工位", "精密测量", "仪表陈列"],
  "自动化与机器人": ["自动化产线", "机械臂工位", "智能仓储", "无人化车间"],
  "环保设备": ["水处理设施", "空气净化空间", "回收处理", "环保工程"],
  "管道阀门与泵": ["管线系统", "泵房空间", "阀门陈列", "工业流体场景"],
  "实验室与化工用品": ["实验台", "洁净空间", "化学储存", "检测场景"],
  "安全防护用品": ["安全装备陈列", "工地安全区", "防护物料台", "警示空间"],
  "家居装饰": ["客厅", "卧室", "边柜", "书房"],
  "节庆派对用品": ["节日餐桌", "生日派对", "节庆布置", "礼品陈列"],
  "母婴用品": ["育儿空间", "柔和儿童房", "收纳台面", "安心护理区"],
  "浴室用品": ["浴室空间", "洗漱台", "淋浴区", "收纳陈列"],
  "智能家居": ["现代客厅", "玄关", "智能控制区", "科技家庭空间"]
};

const categoryPresets = {
  "节庆派对用品": [GENERAL_SCENE_CATEGORY, "派对餐具", "气球装饰", "彩带挂饰", "蛋糕装饰", "礼品袋"],
  "家居装饰": [GENERAL_SCENE_CATEGORY, "香薰摆件", "花瓶", "靠枕", "地毯", "装饰灯"],
  "智能家居": [GENERAL_SCENE_CATEGORY, "智能门锁", "智能音箱", "智能照明", "传感器", "控制面板"],
  "美妆个护": [GENERAL_SCENE_CATEGORY, "精华液", "面霜", "香氛", "洗护用品", "美容仪"],
  "箱包旅行用品": [GENERAL_SCENE_CATEGORY, "拉杆箱", "旅行包", "收纳包", "证件包", "登机箱"]
};

const defaultCategories = [GENERAL_SCENE_CATEGORY, "核心设备", "辅助配件", "功能组件", "展示样品", "场景物料", "系统模块"];
const defaultMaterials = ["金属", "玻璃", "磨砂塑料", "木质", "织物", "陶瓷", "哑光表面", "柔和灯光"];
const defaultKeywords = ["商业质感", "干净有序", "品牌氛围", "真实摄影", "高级留白", "专业可信", "空间层次"];
const defaultAbstractCues = ["抽象空间轮廓", "材质高光", "低对比阴影", "几何陈列关系", "品牌色彩层次", "柔和渐变背景", "秩序化构成"];

const industryData = Object.fromEntries(industryNames.map((industry) => {
  const scenes = scenePresets[industry] || ["品牌氛围场景", "产品陈列场景", "生活方式场景", "商业背景场景"];
  const categories = categoryPresets[industry] || defaultCategories;
  const sceneMap = Object.fromEntries(scenes.map((scene) => [scene, {
    categories,
    materials: defaultMaterials,
    visualKeywords: defaultKeywords
  }]));
  return [industry, {
    abstractCues: defaultAbstractCues,
    scenes: sceneMap
  }];
}));

const englishTerms = Object.fromEntries(industryNames.map((industry) => [industry, industry]));
Object.assign(englishTerms, {
  [GENERAL_SCENE_CATEGORY]: "general scene atmosphere",
  "品牌氛围场景": "brand atmosphere scene",
  "产品陈列场景": "product display scene",
  "生活方式场景": "lifestyle scene",
  "商业背景场景": "commercial background scene",
  "商业质感": "commercial quality",
  "干净有序": "clean and organized",
  "品牌氛围": "brand atmosphere",
  "真实摄影": "realistic photography",
  "高级留白": "premium negative space",
  "专业可信": "professional and trustworthy",
  "空间层次": "spatial depth",
  "金属": "metal",
  "玻璃": "glass",
  "磨砂塑料": "matte plastic",
  "木质": "wood",
  "织物": "fabric",
  "陶瓷": "ceramic",
  "哑光表面": "matte surface",
  "柔和灯光": "soft lighting",
  "派对餐具": "party tableware",
  "气球装饰": "balloon decoration",
  "智能门锁": "smart door lock",
  "精华液": "serum bottle",
  "拉杆箱": "suitcase"
});

window.__inflateAndRun = async function inflateAndRun(base64) {
  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  if (!("DecompressionStream" in window)) {
    throw new Error("Current browser does not support DecompressionStream.");
  }
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  const source = await new Response(stream).text();
  (0, eval)(source);
};

window.__dataReady = Promise.resolve();
