export default async function GetAdvice(setAdvice) {
    const advicePromises = fetch("https://api.adviceslip.com/advice", {
        headers: {
        Accept: "application/json",
        }
    });
    const response = await advicePromises;
    const adviceData = await response.json()
    const advice = adviceData.slip.advice
    setAdvice(advice)
}