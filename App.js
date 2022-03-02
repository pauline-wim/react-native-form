import React from "react";
// import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
// Router
import { NativeRouter, Routes, Route } from "react-router-native";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  return (
    <SafeAreaView>
      <NativeRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </NativeRouter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
