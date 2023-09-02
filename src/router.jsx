import Layout from "@components/Layout";
import NotFoundPage from "@pages/404";
import Home from "@pages/Home";
import RedTree from "@pages/Projects/RedTree";
import TimeSlice from "@pages/Projects/TimeSlice";
import React from "react";
import { useRoutes } from "react-router-dom";
const routes = [
  {
    path: "/",
    meta: {
      title: "Home",
    },
    component: <Layout />,
    children: [
      {
        path: "/",
        meta: {
          title: "Home",
        },
        component: <Home />,
      },
      {
        path: "/time-slice",
        meta: {
          title: "TimeSlice",
        },
        component: <TimeSlice />,
      },
      {
        path: "/red-tree",
        meta: {
          title: "RedTree",
        },
        component: <RedTree />,
      },
      {
        path: "/about-us",
        meta: {
          title: "Home",
        },
        component: <Home />,
      },
      {
        path: "*",
        meta: {
          title: "Not Found",
        },
        component: <NotFoundPage />,
      },
    ],
  },
];

// 路由处理方式
const generateRouter = (routers) => {
  return routers.map((item) => {
    if (item.children) {
      item.children = generateRouter(item.children);
    }
    item.key = "route";
    item.element = item.component;

    return item;
  });
};

const Router = () => useRoutes(generateRouter(routes));

//根据路径获取路由
const checkAuth = (routers, path) => {
  for (const data of routers) {
    if (data.path.indexOf(":") != -1) {
      let spdata = data.path.split(":");
      if (path.indexOf(spdata[0]) != -1) {
        return data;
      }
    } else {
      if (data.path == path) return data;
    }

    if (data.children) {
      const res = checkAuth(data.children, path);
      if (res) return res;
    }
  }
  return null;
};

const checkRouterAuth = (path) => {
  let auth = null;
  auth = checkAuth(routes, path);
  return auth;
};

export { Router, checkRouterAuth };

