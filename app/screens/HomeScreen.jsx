import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import SPACING from "../config/SPACING";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
const avatar = require("../../assets/avatar/avatar.jpg");
import cars from "../data/cars";

const { width } = Dimensions.get("window");

const gradient = [colors["dark-gray"], colors.black];

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <LinearGradient
            style={{
              height: SPACING * 4,
              width: SPACING * 4,
              borderRadius: SPACING * 2,
              justifyContent: "center",
              alignItems: "center",
            }}
            colors={[colors.light, colors["dark-gray"]]}
          >
            <TouchableOpacity
              style={{
                height: SPACING * 3,
                width: SPACING * 3,
                backgroundColor: colors.black,
                borderRadius: SPACING * 1.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="dots-horizontal"
                color={colors.light}
                size={SPACING * 2}
              />
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            style={{
              height: SPACING * 4,
              width: SPACING * 4,
              borderRadius: SPACING * 2,
              justifyContent: "center",
              alignItems: "center",
            }}
            colors={[colors.light, colors["dark-gray"]]}
          >
            <TouchableOpacity
              style={{
                height: SPACING * 3,
                width: SPACING * 3,
                backgroundColor: colors.black,
                borderRadius: SPACING * 1.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={avatar}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: SPACING * 2,
                }}
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View
          style={{
            position: "relative",
            marginVertical: SPACING * 3,
            justifyContent: "center",
          }}
        >
          <TextInput
            style={{
              backgroundColor: colors["dark-gray"],
              padding: SPACING * 1.5,
              borderRadius: SPACING * 2,
              color: colors.light,
              fontSize: SPACING * 2,
              paddingLeft: SPACING * 4,
            }}
            placeholder="Search"
            placeholderTextColor={colors["light"]}
          />
          <Ionicons
            style={{
              position: "absolute",
              left: SPACING,
            }}
            size={SPACING * 2.5}
            color={colors.light}
            name="search"
          />
        </View>

        <LinearGradient
          colors={gradient}
          style={{
            padding: SPACING * 3,
            height: 160,
            borderRadius: SPACING * 2,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              maxWidth: "50%",
            }}
          >
            <Text
              style={{
                color: colors.light,
                fontSize: SPACING * 3.5,
                fontWeight: "800",
                marginBottom: SPACING,
              }}
            >
              20%
            </Text>
            <Text
              style={{
                color: colors.light,
                fontWeight: "700",
                fontSize: SPACING * 2,
                marginBottom: SPACING,
              }}
            >
              New Arrival
            </Text>
            <Text
              style={{
                color: colors.light,
              }}
            >
              Get a new car discount, only valid this friday
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              position: "relative",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: 100,
              }}
              source={require("../../assets/cars/bmw-wlcom.png")}
            />
          </View>
        </LinearGradient>
        <View
          style={{
            marginVertical: SPACING * 3,
          }}
        >
          <Text
            style={{
              color: colors.light,
              fontSize: SPACING * 2,
              fontWeight: "600",
            }}
          >
            Top Deals
          </Text>
          <View
            style={{
              marginTop: SPACING * 2,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {cars.map((car) => (
              <LinearGradient
                key={car.id}
                colors={gradient}
                style={{
                  height: 230,
                  width: width / 2 - SPACING * 3,
                  borderRadius: SPACING * 2,
                  marginBottom: SPACING * 2,
                  padding: SPACING,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="star"
                      color={colors.yellow}
                      size={SPACING * 1.6}
                    />
                    <Text
                      style={{
                        color: colors.light,
                        marginLeft: SPACING / 2,
                      }}
                    >
                      {car.rating}
                    </Text>
                  </View>
                  <TouchableOpacity>
                    <Ionicons
                      name="heart"
                      color={colors.light}
                      size={SPACING * 2}
                    />
                  </TouchableOpacity>
                </View>
                <Image
                  style={{
                    width: "100%",
                    height: 100,
                  }}
                  source={car.image}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.8,
                    color: colors.light,
                  }}
                >
                  {car.name}
                </Text>
                <View
                  style={{
                    marginVertical: SPACING,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      color: colors.light,
                      fontSize: SPACING * 1.5,
                    }}
                  >
                    $ {car.price}
                  </Text>
                  <TouchableOpacity
                    style={{
                      borderRadius: SPACING / 2,
                      overflow: "hidden",
                    }}
                  >
                    <LinearGradient
                      style={{
                        padding: SPACING / 3,
                        paddingHorizontal: SPACING / 2,
                      }}
                      colors={[colors["dark-gray"], colors.dark]}
                    >
                      <Ionicons
                        name="arrow-forward"
                        size={SPACING * 2}
                        color={colors.light}
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </LinearGradient>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
