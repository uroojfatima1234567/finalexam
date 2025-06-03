<div className="lightcontainer">
  <div className="lightbox">
    <div className="light" />
    <div className="light" />
    <div className="light" />
  </div>
</div>

<style>{`
  .lightcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #222;
  }
  .lightbox {
    background: #333;
    border-radius: 30px;
    padding: 30px 20px;
    box-shadow: 0 0 20px #111;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100px;
  }
  .light {
    border: 4px solid #111;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0 auto;
    background: #3a1818;
    box-shadow: 0 0 10px #111 inset;
  }
`}</style>
