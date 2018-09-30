import React, { Component } from "react"
import { SafeAreaView, SectionList, View, TouchableOpacity, Text } from "react-native"
import { Actions } from "react-native-router-flux"

import AppleHealthKit from "rn-apple-healthkit"

const UNITS = AppleHealthKit.Constants.Units
const PERMS = AppleHealthKit.Constants.Permissions

const options = {
  permissions: {
    read: [
      PERMS.Height,
      PERMS.Weight,
      PERMS.StepCount,
      PERMS.Steps,
      PERMS.DateOfBirth,
      PERMS.HeartRate,
      PERMS.ActiveEnergyBurned,
      PERMS.AppleExerciseTime,
      PERMS.BasalEnergyBurned,
      PERMS.SleepAnalysis
    ],
    write: [PERMS.Weight, PERMS.StepCount]
  }
}

AppleHealthKit.initHealthKit(options, (err, results) => {
  if (err) {
    console.log("error initializing Healthkit: ", err)
  } else {
    console.log(results)
  }
})

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
  )
}

const WeightItem = ({ startDate, endDate, value }) => {
  const kg = Math.round(value) / 1000.0
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
  )
}

const HeartRateItem = ({ startDate, endDate, value }) => {
  return (
    <View
      style={{
        padding: 5,
        borderTopWidth: 1,
        borderTopColor: "#EAEAEA"
      }}
    >
      <Text>
        {startDate.substr(11, 5)} - {`${startDate.substr(0, 10)}`}
      </Text>
      <Text>{value} bpm</Text>
    </View>
  )
}

const ActiveEnergyBurnedItem = ({ startDate, endDate, value }) => {
  return (
    <View
      style={{
        padding: 5,
        borderTopWidth: 1,
        borderTopColor: "#EAEAEA"
      }}
    >
      <Text>
        {startDate.substr(11, 5)} - {`${startDate.substr(0, 10)}`}
      </Text>
      <Text>{value} kcal</Text>
    </View>
  )
}


export default class About extends Component {
  constructor() {
    super()
    this.state = {
      sleepSamples: [],
      weightSamples: [],
      heartRateSamples: [],
      activeEnergyBurnedSamples: []
    }
  }

  componentDidMount() {
    const optionWeight = {
      unit: UNITS.gram,
      startDate: new Date(2018, 4, 1).toISOString()
    }
    AppleHealthKit.getWeightSamples(optionWeight, (err, results) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({ weightSamples: results })
      }
    })

    const optionSleep = {
      startDate: new Date(2018, 4, 1).toISOString()
    }
    AppleHealthKit.getSleepSamples(optionSleep, (err, results) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({ sleepSamples: results })
      }
    })

    const optionHeartRate = {
      unit: "bpm", // optional; default 'bpm'
      startDate: new Date(2016, 4, 27).toISOString(), // required
      endDate: new Date().toISOString(), // optional; default now
      ascending: false, // optional; default false
      limit: 10 // optional; default no limit
    }
    AppleHealthKit.getHeartRateSamples(optionHeartRate, (err, results) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({ heartRateSamples: results })
      }
    })

    const optionsActiveEnergyBurned = {
      startDate: new Date(2016, 10, 1).toISOString(), // required
      endDate: new Date().toISOString() // optional; default now
    }
    AppleHealthKit.getActiveEnergyBurned(optionsActiveEnergyBurned, (err, results) => {
      if (err) {
        console.log(err)
      } else {
        this.setState({ activeEnergyBurnedSamples: results })
      }
    })

  }

  renderWeight({ item }) {
    return WeightItem(item)
  }
  renderSleep({ item }) {
    return SleepItem(item)
  }
  renderHeartRate({ item }) {
    return HeartRateItem(item)
  }
  renderActiveEnergyBurned({ item }) {
    return ActiveEnergyBurnedItem(item)
  }

  renderSectionHeader({ section }) {
    return (
      <View
        style={{
          height: 28,
          padding: 4,
          backgroundColor: "#F0F0F0",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{section.title}</Text>
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <TouchableOpacity
          style={{ margin: 128 }}
          onPress={() => {
            Actions.home()
          }}
        >
          <Text>Go Home</Text>
        </TouchableOpacity>

        <SectionList
          style={{ flex: 1 }}
          keyExtractor={item => item.startDate + item.value.toString()}
          renderSectionHeader={this.renderSectionHeader.bind(this)}
          sections={[
            {
              title: "Weight",
              data: this.state.weightSamples,
              renderItem: this.renderWeight.bind(this)
            },
            {
              title: "Heart Rate",
              data: this.state.heartRateSamples,
              renderItem: this.renderHeartRate.bind(this)
            },
            {
              title: "Active Burned Energy",
              data: this.state.activeEnergyBurnedSamples,
              renderItem: this.renderActiveEnergyBurned.bind(this)
            }
          ]}
        />
      </SafeAreaView>
    )
  }
}
