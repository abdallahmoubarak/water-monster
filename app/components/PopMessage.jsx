export default function PopMessage({ message }) {
  useEffect(() => {
    const clearMessage = setTimeout(() => {
      setAlert("");
    }, 2500);
    return () => clearTimeout(clearMessage);
  }, [message]);

  return (
    <>
      <div className="message-container">
        <div className="message">{message}</div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
