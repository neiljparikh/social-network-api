const sampleUsernames = [
    'user123',
    'john_doe',
    'coding_ninja',
    'awesome_user',
    'webdev_pro',
    'geeky_gamer',
    'music_lover42',
    'tech_enthusiast',
    'coffee_addict',
    'social_butterfly'
  ];

  const sampleThoughts = [
    "Just cruisin' through life's wild ride! 🚗✨",
    "Scared myself trying a new recipe today, but hey, at least I didn't burn the kitchen down! 🔥😅",
    "Spreading good vibes like confetti - who's with me? 🎉💖",
    "No crystal ball needed! Making my own future, one coffee at a time. ☕️💫",
    "Life's full of questions, but I'm just here for the memes. Keep it simple, folks! 😜🤷‍♂️",
    "Forget counting days, let's count the moments that make us smile! 😄📆",
    "DIY destiny in progress! Crafting my tomorrow, like a boss. 💪🛠️",
    "Choosing happiness over adulting responsibilities today! Who's with me? 🤘😁",
    "Giving good vibes and hoping for a lot in return! Karma, don't let me down! 🌈🤞",
    "Chasing dreams like it's the last slice of pizza – with gusto! 🍕✨"
  ];

  const sampleReactions = [
    "Same vibes! 🙌😄",
    "Whoa, that's deep! 🤔🌊",
    "LOL! I needed this laugh today. 😂👏",
    "Couldn't agree more! 🌟✨",
    "Feeling inspired now! 💪🔥",
    "This is my life motto! 🙏❤️",
    "Wait, you burned the kitchen too? Twinsies! 🍳🔥",
    "Totally stealing this for my bio! 🌈📝",
    "Mood activated! 🚀😎",
    "Can we get a print of this on a T-shirt? 👕💯"
  ];
// Get a random item given an array
  const getRandomArrItem = (array) =>
  array[Math.floor(Math.random() * array.length)];

// Assigns email to user
  const getEmail = (user) => `${user}@email.com`;

// Get random username
  const getRandomUsername = () => getRandomArrItem(sampleUsernames)

// Create sampleReactions
  const createSampleReactions = (int) => {
    if (int === 1) {
      return {
        reactionBody: getRandomArrItem(sampleReactions),
        username: getRandomArrItem(sampleUsernames),
      };
    }
    results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomArrItem(sampleReactions),
        username: getRandomArrItem(sampleUsernames),
      });
    }
    return results;
  };

  const getRandomThought = () => {
    const results = [];
    for (i = 0; i < thoughts.length; i++) {
      results.push({
        thoughtText: thoughts[i],
        username: getRandomArrItem(allUsernames),
        reactions: [...createReactions(2)],
      });
    }
    return results;
  };
  

  
  module.exports = {
    getEmail,
    getRandomThought,
    getRandomUsername,
  };