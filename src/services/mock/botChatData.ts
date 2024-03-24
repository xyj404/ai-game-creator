export const botResData: string[] = [
  '我是机器人',
  '苹果是一家美国的科技巨头，他们生产了超级电脑、iPhone、iPad以及其他优秀的产品。几十年来，苹果一直在创新和推动技术的发展。在整个世界，苹果的产品被无数的用户所爱用和喜爱。',
  '苹果公司的创立者是斯teve jobs，他是公司的董事长、CEO和设计师。他创立了iMac，并将苹果公司带领进入了一个全新的时代。',
  '苹果公司的产品一直都是非常的受欢迎，他们在设计、性能和价格上都非常的吸引人。苹果公司的产品一直都在追求简洁、漂亮和功能强大。苹果公司的产品在世界各地都有着无数的粉丝，他们会一直等待着苹果公司的新产品的发布。',
  '中国是一个辽阔的国家，它有着悠久的历史和丰富的文化。中国的历史可以追溯到数千年前，在古代的中国，有着许多著名的故事和传奇。在中国的故事中，有一个故事被称之为“战国 Period”，这是中国历史上一个非常重要的时期，在这个时期，很多国家的力量都在斗争，有许多英雄散伙的故事。这些故事一直被传承下来，被许多中国人所珍视和喜爱。',
  '在中国的故事中，有一个故事被称之为“秦始皇”，这个故事非常的有趣，他是中国历史上的一个著名的人物，他在很短的时间内成功统一了许多国家，并且建立起了一个强大的国家。这个故事被中国人所崇敬和喜爱，他被视为一个国家的创建者。',
  '在中国的故事中，有一个故事被称之为“三国 Period”，这是中国历史上一个非常重要的时期，在这个时期，许多国家的力量都在斗争，有许多英雄散伙的故事。这些故事一直被中国人所传承和喜爱，他们被视为中国人的国家和民族的精神。',
  '在中国的故事中，有一个故事被称之为“辽西大战争”，这个故事非常的悲壮，这是中国历史上最后一次大的战争，这场战争的参与者非常的多，有许多国家和民族参与进去，但是最后的结果是非常的悲壮，这些故事被中国人所珍视和悼念，他们被视为中国人的国家和民族的精神。'
];

export const getBotChatData = () => {
  const randomIndex = Math.floor(Math.random() * botResData.length);
  const randomElement = botResData[randomIndex];
  return randomElement;
};