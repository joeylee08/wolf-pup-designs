
import wolfpuplogo from "../assets/images/wolfpuplogo.png";

const FlyerKo = () => {
  return (
    <div className="mainPage flyer" id='koreanFlyer'>
      <h2 className="flyerLink">wolfpupdesigns.org</h2>

      <div className="child child1">
        <img src={wolfpuplogo} alt="WolfPupDesigns Logo" />
        <div className='flyerText'>
          <h1>Wolf Pup Designs</h1>
          <h3>웹사이트 제작 및 가격 안내</h3>
        </div>
      </div>

      <div className="child child3">
        <h2 className="sectionHeading">
          기본 웹사이트 <span>$800</span>
        </h2>

        <p>
          개인 및 소규모 사업체를 위한 전문적인 웹사이트를
          제작해 드립니다. 최대 5개의 페이지로 구성되며,
          원하시는 디자인에 맞춰 제작합니다.
          컴퓨터와 스마트폰 모두에서 편리하게 이용할 수 있습니다.
        </p>

        <br />

        <p>웹사이트에 포함할 수 있는 내용:</p>
        <p>a. 제공해 주신 글과 안내문 (최초 1회 등록)</p>
        <p>b. 제공해 주신 사진과 이미지 (최초 1회 등록)</p>
        <p>c. 유튜브 동영상</p>
        <p>d. 위치를 표시하는 구글 지도</p>
        <p>e. 이메일 및 기타 웹사이트 링크</p>
      </div>

      <div className="child child3 complete">
        <h2 className="sectionHeading">
          종합 웹사이트 패키지 <span>$1,800</span>
        </h2>

        <p>01 / 기본 웹사이트 <span>+ $800</span></p>
        <p>02 / 게시물 및 자료 관리 <span>+ $600</span></p>
        <p>03 / 사진 관리 기능 <span>+ $400</span></p>
        <p>
          04 / 유튜브 재생목록 연동{" "}
          <span style={{ color: "green", fontWeight: 450 }}>
            + FREE
          </span>
        </p>
      </div>

      <div className="child child4">
        <h2 className="sectionHeading">기본 웹사이트 추가 기능+</h2>
        <p>
          01 / 게시물 및 자료 관리 <span>+ $600</span>
        </p>
        <p>
          관리자 전용 페이지에서 소식, 공지사항, 게시물, 각종 자료 등을 직접 등록하고 수정하거나 삭제할 수 있습니다. 등록한 내용은 내부 자료로 보관하거나 웹사이트에 공개할 수 있으며, 사진과 파일도 첨부할 수 있습니다.
        </p>
        <br />
        <p>
          02 / 사진 관리 기능 <span>+ $400</span>
        </p>
        <p>
          관리자 전용 페이지에서 스마트폰이나 컴퓨터로 사진을 직접 올리고 삭제할 수 있습니다. 사진마다 설명을 추가할 수 있으며, 등록한 사진은 웹사이트의 사진 갤러리에 자동으로 표시됩니다.
        </p>
        <br />
        <p>
          03 / 유튜브 재생목록 연동 <span>+ $200</span>
        </p>
        <p>
          유튜브 재생목록을 웹사이트에 연결하여 방문자가 동영상을 쉽게 볼 수 있도록 해드립니다. 웹사이트 제작이 완료되기 전까지 연결할 유튜브 재생목록 링크를 제공해 주시면 됩니다.
        </p>
        <br />
        <p>
          04 / 온라인 결제 연동 <span>+ $300</span>
        </p>
        <p>
          Stripe를 이용하여 웹사이트에서 안전하게 온라인 결제를 받을 수 있도록 설정해 드립니다. 일회성 결제와 정기 결제 모두 가능합니다.
        </p>
      </div>
    </div>
  );
};

export default FlyerKo;
