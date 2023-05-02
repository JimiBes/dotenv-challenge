require("dotenv").config();
function getEnv() {
  return (
    <p>
      I am {MY_NAME}, wilder in {MY_CITY}, and I love {MY_LANGUAGE}.
    </p>
  );
}
getEnv();