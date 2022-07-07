import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
const DashboardToolbarButton = () => {
  const { t } = useTranslation();
  return (
    <Button
      sx={{
        background:
          "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
        color: "rgb(255,255,255)",
        padding: "0.5rem 2.9rem !important",
      }}
    >
      {t("Upgrade To Pro")}
    </Button>
  );
};
export default DashboardToolbarButton;
