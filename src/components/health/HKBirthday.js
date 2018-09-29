import React, { Component } from "react";
import { View, Text } from "react-native";
import AppleHealthKit from "rn-apple-healthkit";

const PERMS = AppleHealthKit.Constants.Permissions;
const UNITS = AppleHealthKit.Constants.Units;

const options = {
  permissions: {
    read: [PERMS.Weight, PERMS.SleepAnalysis]
  }
};

AppleHealthKit.initHealthKit(options, (err, results) => {
  if (err) {
    console.log("error initializing Healthkit: ", err);
  } else {
    console.log(results);
  }
});

const SleepItem = ({ startDate, endDate, value }) => {
  return (
    <View
      style={{
        padding: 5,
        borderTopWidth: 1,
        borderTopColor: "#EAEAEA"
      }}
    >
      <Text>{`${startDate.substr(0, 10)}: ${startDate.substr(11, 5)}〜${endDate.substr(11, 5)}`}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const WeightItem = ({ startDate, endDate, value }) => {
  const kg = Math.round(value) / 1000.0;
  return (
    <View
      style={{
        padding: 5,
        borderTopWidth: 1,
        borderTopColor: "#EAEAEA"
      }}
    >
      <Text>{startDate.substr(0, 10)}</Text>
      <Text>{`${kg} kg`}</Text>
    </View>
  );
};








class HKBirthday extends Component {
  componentDidMount = () => {
   // fooBar();
    console.log("componentDidMount....");
    // AppleHealthKit.getDateOfBirth(null, (err: Object, results: Object) => {
    // console.log(results)
    // });
    // AppleHealthKit.initHealthKit(options,"")
    // AsyncStorage.getItem("name").then(value => this.setState({ name: value }));
  };

  render() {
    return (
      <View>
        <Text>hi ...</Text>
      </View>
    );
  }
}
export default HKBirthday;

// function fooBar() {
//   console.log("foobar...");
//   let d = new Date(2016, 1, 1);
//   let options = {
//     startDate: new Date(2016, 10, 1).toISOString(), // required
//     endDate: new Date().toISOString() // optional; default now
//   };

//   AppleHealthkit.getActiveEnergyBurned(options: Object, (err: Object, results: Object) => {
//     if (err) {
//         return;
//     }
//     console.log(results)
// });
// }

// AppleHealthKit.isAvailable((err: Object, available: boolean) => {
//   if (err) {
//     console.log("error initializing Healthkit: ", err);
//     return;
//   }
//   // Healthkit is available
// });

// let options = {
//   permissions: {
//       read: ["Height", "Weight", "StepCount", "DateOfBirth", "BodyMassIndex", "ActiveEnergyBurned"],
//       write: ["Height", "Weight", "StepCount", "BodyMassIndex", "Biotin", "Caffeine", "Calcium", "Carbohydrates", "Chloride", "Cholesterol", "Copper", "EnergyConsumed", "FatMonounsaturated", "FatPolyunsaturated", "FatSaturated", "FatTotal", "Fiber", "Folate", "Iodine", "Iron", "Magnesium", "Manganese", "Molybdenum", "Niacin", "PantothenicAcid", "Phosphorus", "Potassium", "Protein", "Riboflavin", "Selenium", "Sodium", "Sugar", "Thiamin", "VitaminA", "VitaminB12", "VitaminB6", "VitaminC", "VitaminD", "VitaminE", "VitaminK", "Zinc", "Water"]
//   }
// };

// AppleHealthkit.initHealthKit(options: Object, (err: string, results: Object) => {
//   if (err) {
//       console.log("error initializing Healthkit: ", err);
//       return;
//   }
//   // Healthkit is initialized...
//   // now safe to read and write Healthkit data...
// });