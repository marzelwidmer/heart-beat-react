import React, { Component } from "react";
import { AppRegistry } from "react-native";
import Routes from "./src/components/routes";

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
AppRegistry.registerComponent("reactTutorialApp", () => reactTutorialApp);


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from "react";
// import { SectionList, StatusBar, Text, View, SafeAreaView } from "react-native";

// import AppleHealthKit from "rn-apple-healthkit";
// const PERMS = AppleHealthKit.Constants.Permissions;
// const UNITS = AppleHealthKit.Constants.Units;

// const options = {
//   permissions: {
//     read: [PERMS.Weight, PERMS.SleepAnalysis]
//   }
// };

// AppleHealthKit.initHealthKit(options, (err, results) => {
//   if (err) {
//     console.log("error initializing Healthkit: ", err);
//   } else {
//     console.log(results);
//   }
// });

// const SleepItem = ({ startDate, endDate, value }) => {
//   return (
//     <View
//       style={{
//         padding: 5,
//         borderTopWidth: 1,
//         borderTopColor: "#EAEAEA"
//       }}
//     >
//       <Text>{`${startDate.substr(0, 10)}: ${startDate.substr(11, 5)}〜${endDate.substr(11, 5)}`}</Text>
//       <Text>{value}</Text>
//     </View>
//   );
// };

// const WeightItem = ({ startDate, endDate, value }) => {
//   const kg = Math.round(value) / 1000.0;
//   return (
//     <View
//       style={{
//         padding: 5,
//         borderTopWidth: 1,
//         borderTopColor: "#EAEAEA"
//       }}
//     >
//       <Text>{startDate.substr(0, 10)}</Text>
//       <Text>{`${kg} kg`}</Text>
//     </View>
//   );
// };

// type Props = {};
// export default class App extends Component<Props> {
//   constructor() {
//     super();
//     this.state = {
//       sleepSamples: [],
//       weightSamples: []
//     };
//   }

//   componentDidMount() {
//     const optionWeight = {
//       unit: UNITS.gram,
//       startDate: new Date(2018, 4, 1).toISOString()
//     };
//     AppleHealthKit.getWeightSamples(optionWeight, (err, results) => {
//       if (err) {
//         console.log(err);
//       } else {
//         this.setState({ weightSamples: results });
//       }
//     });

//     const optionSleep = {
//       startDate: new Date(2018, 4, 1).toISOString()
//     };
//     AppleHealthKit.getSleepSamples(optionSleep, (err, results) => {
//       if (err) {
//         console.log(err);
//       } else {
//         this.setState({ sleepSamples: results });
//       }
//     });
//   }

//   renderWeight({ item }) {
//     return WeightItem(item);
//   }

//   renderSleep({ item }) {
//     return SleepItem(item);
//   }

//   renderSectionHeader({ section }) {
//     return (
//       <View
//         style={{
//           height: 28,
//           padding: 4,
//           backgroundColor: "#F0F0F0",
//           justifyContent: "center"
//         }}
//       >
//         <Text style={{ fontWeight: "bold", fontSize: 16 }}>
//           {section.title}
//         </Text>
//       </View>
//     );
//   }

//   render() {
//     return (
//       <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
//         <SectionList
//           style={{ flex: 1 }}
//           keyExtractor={item => item.startDate + item.value.toString()}
//           renderSectionHeader={this.renderSectionHeader.bind(this)}
//           sections={[
//             {
//               title: "Weight",
//               data: this.state.weightSamples,
//               renderItem: this.renderWeight.bind(this)
//             },
//             {
//               title: "Sleep",
//               data: this.state.sleepSamples,
//               renderItem: this.renderSleep.bind(this)
//             }
//           ]}
//         />
//       </SafeAreaView>
//     );
//   }
// }

// // Error with HealthKit authorization: Error Domain=com.apple.healthkit Code=4 "Missing com.apple.developer.healthkit entitlement." 
// // UserInfo={NSLocalizedDescription=Missing com.apple.developer.healthkit entitlement.}"
