async function postPledge(amount,comment,anonymous,project) {
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;
    const token = window.localStorage.getItem("token");
  
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify({
          "amount": amount,
          "comment": comment,
          "anonymous": anonymous,
            "project": project,
        }),
    });
  
    if (!response.ok) {
      const fallbackError = `Error creating pledge`;
  
      const data = await response.json().catch(() => {
        throw new Error(fallbackError);
      });
  
      const errorMessages = {
        detailError: data?.detail,
        amountError: data?.amount,
        commentError: data?.comment,
      };
      if (errorMessages) {
        if (
          errorMessages.detailError &&
          errorMessages.detailError.includes("Authentication credentials")
        ) {
          errorMessages.detailError =
            "You must be logged in to make a pledge.";
        }
        for (let error in errorMessages) {
          if (!errorMessages[error]) {
            delete errorMessages[error];
          }
        }
  
        const errorMessage = Object.values(errorMessages);
        throw new Error(errorMessage);
      } else {
        const errorMessage = fallbackError;
        throw new Error(errorMessage);
      }
    }
    return await response.json();
  }
  
  export default postPledge;