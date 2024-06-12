"use client";
import StyledComponentsRegistry from "../../_utilities/antd_registry";
import ConfigProvider from "antd/es/config-provider";
import { StyleProvider } from "@ant-design/cssinjs";
import { ReactNode } from "react";
import { Provider as JotaiProvider } from "jotai";
import AuthStateChangeProvider from "./AuthStateChangeProvider";

interface IWrapperProps {
  children: ReactNode;
}

const Wrapper: React.FunctionComponent<IWrapperProps> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ConfigProvider>
        <StyleProvider hashPriority="high">
          <JotaiProvider>
            <AuthStateChangeProvider>{children}</AuthStateChangeProvider>
          </JotaiProvider>
        </StyleProvider>
      </ConfigProvider>
    </StyledComponentsRegistry>
  );
};

export default Wrapper;
