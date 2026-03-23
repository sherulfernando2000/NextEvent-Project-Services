module.exports = {
  apps : [
    {
      name   : "service-event",
      script : "java -jar ./service-event/target/Event-Service-1.0.0.jar",
      log_file:  "./logs/service-event.log",
    },
    {
      name   : "service-participant",
      script : "java -jar ./service-registration/target/Participant-Service-1.0.0.jar",
      log_file:  "./logs/service-participant.log",
    },
    {
      name   : "service-registration",
      script : "java -jar ./service-registration/target/Registration-Service-1.0.0.jar",
      log_file:  "./logs/service-registration.log",
    }
  ]
}
