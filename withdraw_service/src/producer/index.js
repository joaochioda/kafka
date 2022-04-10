const { Kafka } = require("kafkajs");

module.exports = {
  async produce(topic) {
    const kafka = new Kafka({
      clientId: "2",
      brokers: ["ec2-54-243-14-9.compute-1.amazonaws.com:29093"], //qa
      // brokers: ["localhost:9092"], //local
    });
    const producer = kafka.producer();
    await producer.connect();
    console.log("Producer connected");
    const producedData = await producer.send({
      topic: "withdraw",
      messages: [
        {
          value: "batatinha 123",
        },
      ],
    });

    console.log(`PRODUCER ==> ${JSON.stringify(producedData)}`);
    return;
  },
};
