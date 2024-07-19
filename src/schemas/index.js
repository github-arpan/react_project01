import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().min(3).max(25).required("Please enter your username "),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Please enter your password"),
});
