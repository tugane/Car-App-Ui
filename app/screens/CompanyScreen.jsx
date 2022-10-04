import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import SPACING from "../config/SPACING";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";

const logo = require("../../assets/logos/tesla.png");
import series from "../data/series";
import { LinearGradient } from "expo-linear-gradient";

const CompanyScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: SPACING * 4,
          }}
        >
          <Image
            style={{
              height: SPACING * 7,
              width: SPACING * 20,
            }}
            source={logo}
          />
          <Text
            style={{
              color: colors.white,
              fontSize: SPACING * 5,
              fontWeight: "700",
            }}
          >
            Tesla
          </Text>
          <Text
            style={{
              color: colors.light,
              marginTop: SPACING / 2,
            }}
          >
            5 Searies
          </Text>
        </View>
        {series.map((item) => (
          <LinearGradient
            key={item.id}
            colors={[colors["dark-gray"], colors.black]}
            style={{
              height: 250,
              borderRadius: SPACING * 2,
              padding: SPACING * 2,
              marginBottom: SPACING * 2,
            }}
          >
            <Image
              style={{
                width: "100%",
                height: 160,
              }}
              resizeMode="contain"
              source={item.image}
            />
            <Text
              style={{
                color: colors.light,
                fontSize: SPACING * 1.7,
                fontWeight: "700",
                marginBottom: SPACING,
              }}
            >
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.light }}>
                Starting price from $ {item.starting_price}
              </Text>
              <TouchableOpacity
                style={{
                  overflow: "hidden",
                  borderRadius: SPACING / 2,
                }}
              >
                <LinearGradient
                  style={{
                    paddingHorizontal: SPACING,
                    paddingVertical: SPACING / 3,
                  }}
                  colors={[colors["dark-gray"], colors.dark]}
                >
                  <Ionicons
                    name="arrow-forward"
                    color={colors.light}
                    size={SPACING * 2}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        ))}
      </ScrollView>
      <TouchableOpacity>
        <LinearGradient
          style={{
            padding: SPACING / 5,
            borderRadius: SPACING * 2,
          }}
          colors={[colors.light, colors.dark]}
        >
          <LinearGradient
            style={{
              padding: SPACING * 1.6,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: SPACING * 2,
            }}
            colors={[colors["dark-gray"], colors.dark]}
          >
            <Text
              style={{
                color: colors.light,
                fontWeight: "800",
                fontSize: SPACING * 2,
              }}
            >
              View All
            </Text>
          </LinearGradient>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CompanyScreen;

const styles = StyleSheet.create({});
