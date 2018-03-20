module.exports = ({incoming}) => {
  const { path } = incoming;

  const pathRelatedThings = {
    'aws-serverless': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'google-cloud': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'microsoft-azure': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'rackspace': () => {
      return `I don't do this yet, but I will soon!`;
    }
  };

  // Do path related things
  // ----------------------
  if(path != null && pathRelatedThings[path]) return pathRelatedThings[path]();

  return `Hey, I'll get that thing from the cloud!`;
};