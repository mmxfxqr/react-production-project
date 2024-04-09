import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Sidebar } from "./Sidebar";
import { withTranslation } from "react-i18next";
import { renderWithTranslation } from "../../../../shared/config/tests/renderWithTranslation/renderWithTranslation";
import { componentRender } from "shared/config/tests/componentRender/componentRender";

describe("Sidebar", () => {
    test("Test render", () => {
      componentRender(<Sidebar/>)
      expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("test toggle", () => {
      componentRender(<Sidebar/>)
      const toggleBtn = screen.getByTestId("sidebar-toggle")
      expect(screen.getByTestId("sidebar")).toBeInTheDocument();
      fireEvent.click(toggleBtn);
      expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    });
});
