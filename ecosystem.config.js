// module.exports = {
//   apps : [
//     {
//       name: "service-event",
//       script: "java",
//       args: "-jar ./service-event/target/Event-Service-1.0.0.jar",
//       instances: 2,
//       exec_mode: "fork", // Required for JARs
//       log_file: "./logs/service-event.log"
//     },
//     {
//       name: "service-participant",
//       script: "java",
//       args: "-jar ./service-participant/target/Participant-Service-1.0.0.jar",
//       instances: 2,
//       exec_mode: "fork",
//       log_file: "./logs/service-participant.log"
//     },
//     {
//       name: "service-registration",
//       script: "java",
//       args: "-jar ./service-registration/target/Registration-Service-1.0.0.jar",
//       instances: 2,
//       exec_mode: "fork",
//       log_file: "./logs/service-registration.log"
//     }
//   ]
// }


module.exports = {
  apps : [
    {
      name: "cloud-sql-auth-proxy",
      script: "./cloud-sql-proxy project-0ae0d75b-3979-4ebf-be9:asia-south2:mysql-vm project-0ae0d75b-3979-4ebf-be9:asia-south2:postgres-vm --private-ip",
      log_file: "./logs/cloud-sql-proxy.log",
    },

    {
      name   : "service-event",
      script : "java -jar ./service-event/target/Event-Service-1.0.0.jar",
      log_file:  "./logs/service-event.log",
      instances: 2
    },
    {
      name   : "service-participant",
      script : "java -jar ./service-participant/target/Participant-Service-1.0.0.jar",
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
