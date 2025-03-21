export const generateSuccessProbability = () => `${Math.floor(Math.random() * 100)}% success probability`;

const codenames = ["The Nightingale", "The Kraken", "Shadow Viper", "Ghost Whisperer"];
export const generateCodename = () => codenames[Math.floor(Math.random() * codenames.length)];