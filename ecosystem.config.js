module.exports = {
  apps : [
    {
      name   : "service-event",
      script : "java -jar ./service-event/target/Event-Service-1.0.0.jar",
      log_file:  "./logs/service-event.log",
      instances: 2
    },
    {
      name   : "service-participant",
      script : "java -jar ./service-registration/target/Participant-Service-1.0.0.jar",
      log_file:  "./logs/service-participant.log",
      instances: 2
    },
    {
      name   : "service-registration",
      script : "java -jar ./service-registration/target/Registration-Service-1.0.0.jar",
      log_file:  "./logs/service-registration.log",
      instances: 2
    }
  ]
}
