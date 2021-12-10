module.exports = (req, _res, _next) => {
  const responseTime = Date.now() - req.startTime;
  console.log(`Tempo de resposta: ${responseTime}ms\n`);
}