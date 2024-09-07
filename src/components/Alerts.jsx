import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Alerts() {
  return (
    <Stack id="alerts" sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">Id card anda telah di buat</Alert>
    </Stack>
  );
}
