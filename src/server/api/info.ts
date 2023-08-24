import os from 'node:os';

export default defineEventHandler(() => {
  return {
    host: os.hostname(),
    platform: os.platform(),
    release: os.release(),
    type: os.type(),
    uptime: os.uptime(),
    userInfo: os.userInfo(),
    date: Date.now(),
  };
});
