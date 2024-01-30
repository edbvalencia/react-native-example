import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import User from "./user/screens/User";
import Trend from "./trend/screens/Trend";
import Job from "./job/Job";

const Tab = createBottomTabNavigator();

//const Stack = createNativeStackNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Usuario") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Tendencias") {
            iconName = focused ? "trending-up-sharp" : "trending-up-sharp";
          } else if (route.name === "Empleos") {
            iconName = focused ? "briefcase" : "briefcase-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Usuario" component={User} />
      <Tab.Screen name="Tendencias" component={Trend} />
      <Tab.Screen name="Empleos" component={Job} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}
<Ionicons name="" size={24} color="black" />;
