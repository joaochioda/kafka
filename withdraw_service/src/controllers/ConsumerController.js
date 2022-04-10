const { Kafka } = require("kafkajs");

module.exports = {
  async consumer() {
    const kafka = new Kafka({
      clientId: "1",
      // brokers: ["ec2-54-243-14-9.compute-1.amazonaws.com:29093"], //qa
      brokers: ["localhost:9092"], //local
    });

    const consumer = kafka.consumer({ groupId: "1" });

    await consumer.connect();
    console.log("Consumer connected");

    await consumer.subscribe({
      topic: "withdraw",
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(`CONSUMER ==> ${message.value.toString()}`);
        const [id, amount, hash] = message.value.toString().split("|");
      },
    });
  },
};
