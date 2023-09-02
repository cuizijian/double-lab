import { redTreeArtWorksImgList } from "@/consts/artWorksImgList";
import { MintNFT } from "@components/Contract/Mint";
import Wallet from "@components/Wallet";
import redTreeStyles from "../RedTree/index.module.less";

export default function RedTree() {
  function LineTitle(props) {
    return (
      <div className={`${redTreeStyles.Top} clearfix`}>
        <h1>
          {props.name}
          <div className={redTreeStyles.WalletBtn}>
            <Wallet />
          </div>
        </h1>
      </div>
    );
  }

  function SectionContent(props) {
    const {title, text, titleShow} = props;
    return (
      <section>
        {titleShow && <h2>{title}</h2>}
        <p className={redTreeStyles.Content}>
          {text}
        </p>
      </section>
    )
  }

  return (
    <div className={redTreeStyles.RedTree}>
      <LineTitle name="Plating Drifting Mangrove Seeds" />
      <div className={redTreeStyles.Banner}>
        <img src="/svg/redtree/seeds.svg" />
      </div>
      <div className={redTreeStyles.BtnWrap}>
        <MintNFT />
      </div>
      <SectionContent
        titleShow={true}
        title="About Project"
        text="English Name of the Program: Planting Drifting Mangrove Seeds
        This is a non-profit and environment-friendly NFT program dedicated to planting mangroves in the tropical and subtropical seashores worldwide. 
        Ethereum Layer 2 will issue a total of 3,333 mangrove NFT seeds and plant 3,333 mangrove seeds along the coast of China’s Hainan Island, an emerging international tourist destination. In the future, this planting plan will expand to other subtropical and tropical maritime countries worldwide. The goal is to create a marine mangrove metaverse city with innovative digital technology, transcend virtual space and empower the physical world to protect marine ecology.
        At the same time, with the reality taken into account, a small number of special versions of mangrove NFT seeds will be issued in other blockchains to benefit the non-Ethereum users (especially those in Asia) who respect nature and are ready to contribute to marine ecology.
        Origin of the Program
        With the frequent offshore activities and coastal development by mankind, the size of mangrove forest globally is diminishing year by year. Mangroves play a vital role in carbon storage, wind reduction, water management and marine ecology conservation, and they are hailed as the “guardians of the ocean”. If the protection of mangrove forests is ignored and no human intervention is involved in their cultivation, these precious trees will disappear from Mother Earth in a fragmented manner within 100 years.
        We, the participants in this program, including artists, curators, engineers, translators, program sponsors and volunteers, have only one goal ---- to protect mangrove forests and safeguard Mother Earth’s marine ecology.
        This is an on-chain management ecological program which can leave our footprint in history through using the special blockchain timestamps.
        	As a small but great segment of history in the human efforts to protect the environment, it will become part of cultural heritage in the future;
        	It is the on-chain symbol that marks a real mangrove seed;
        "
      />
      <SectionContent
        titleShow={true}
        title="Artist & Curator"
        text="Artists:

        ZOOJOO
        
        	CosmoChamber NFT project manager, NFT artist, core member of Seedao Art Guild;
        
        	has launched 3 public chain NFT projects, has served as chief artistic director of a game company, and the chief operations officer of the media account “NFT mainland”;
        
        	Holder of Master’s degree from China Academy of Fine Arts, former EA/Netease /Ali/Design Director, NFT artist, the earliest practitioner of NFT in China, multimedia artist, skillful in expressing dreams and absurdity with paintings and installations; 
        
        	His works are in the collection of China’ s National Art Museum, Zhejiang Art Museum, Celebrities’ Manuscripts Hall of Shanghai Library, Shanghai Art Museum and private art collectors; 
        
        	has participated in the art exhibitions held in Beijing, Shanghai, Hangzhou, Hong Kong as well as foreign countries including France, Italy, Germany, Austria, Sweden and Poland. 
        
        Hu Quanling
        	born in Hunan, China and holds a college degree in Fine Arts; 
        
        	executive vice president of the Division of Stores Operation under Meilan International Airport in Haikou, Hainan; 
        
        	In Haikou in 2008, he started China’s first contemporary children’s art museum -- Beautiful Future Contemporary Children’s Art Museum (its predecessors are: Singapore International Children’s Art Exchange Foundation and Northeast Asia China-Japan-Korea International Children's Art Exchange Association), and has been its director until now;
        
        	He has been devoted to studying the application of “image science” in children’s cognition, expression and aesthetic education, created and published original children’s picture-books, explore children’s digital art. He tries to operate the museum with achievements with the aim to create a long-lasting children’s art museum.
        
        	As an independent artist, he specializes in contemporary art, focusing on tropical rainforest-themed oil paintings and ocean-themed ink paintings. From 2007 to 2022, he created more than 700 artworks in 60 series. However, he does not join any organization, participate in any competition or exhibition except devoting himself to research and creation. 
        
        	He has mentioned many times that “My art is to appeal for the protection of the rainforest and marine ecology of Mother Earth. I can be the mouthpiece of the grasses, forests, birds, insects, fish and shrimps. As long as I live, I will create artworks on behalf of them”."
      />
      <section>
        <div className={redTreeStyles.ModuleTop}>
          <div>
            <h2>Artworks</h2>
          </div>
          <div className={redTreeStyles.Marketplace}>
            <a href="https://opensea.io/collection/cosmochamber" target="_blank">
              <img src="/img/common/opensea.svg" />
            </a>
          </div>
        </div>
        <div className={redTreeStyles.artWorkList}>
          {redTreeArtWorksImgList.map(item => {
            return <div className={redTreeStyles.item} key={item?.key}>
              <img className="img" src={item?.img} />
              <span>{item?.name}</span>
            </div>
          })}
        </div>
      </section>
      <SectionContent
        titleShow={true}
        title="Background"
        text="	A summary of mangrove ecology: the roots of mangroves are submerged by seawater twice a day, and the stuff floating on the ocean is stranded in the roots and branches of the mangroves. At the same time, water from the rivers slows down after flowing through the filter-like root grid, leaving behind sediments from the land, human-made products and other materials. After being consumed and decomposed by marine life and bacteria, they become hundreds of tons of fertile silt. This process creates a large and complete ecosystem where vegetation, birds, mollusks, shrimps, crabs, algae and bacteria co-exist. 
        	Mangroves’ function to reduce the impact of wind and waves, fortify dikes and store carbon 
        A coast with a mangrove forest can effectively maintain its original appearance for decades as the forest is the best shelter to lessen the impact of wind and tide and fortify the dikes. Mangroves can also sequester carbon. The carbon stored in the mangrove, salt marsh, and seagrass bed ecosystems, also known as blue carbon, accounts for about 55% of all the carbon stored all the ecosystems. Blue carbon plays an important role in mitigating climate warming and reducing greenhouse emissions, and thus is a feasible path to reduce carbon. Studies show that the carbon sequestration speed of mangroves is five to six times faster than that of terrestrial temperate, tropical or boreal forest."
      />
      <SectionContent
        titleShow={true}
        title="Goal"
        text="	Be the world’s first blockchain program to protect marine ecology;
        	Issuance: will be mostly issued through Ethereum Layer 2 ERC 721 Protocol. After the gas fee is reduced, it will return to Ethereum’s base blockchain and consider linking it with carbon indicators at a later stage;
        	Timing: will be first issued internally at the end of 2022 and officially issued in 2023."
      />
      <SectionContent
        titleShow={true}
        title="Rights of Holders"
        text="	Become the owner of an exquisite art program and participate in crypto art exhibitions worldwide in the future;
        	Holding 1 NFT is equivalent to claiming a mangrove seed. The Program co-founders will manage its germination and plant the seedling along the coast to grow and reproduce; 
        	A certain percentage of the mangrove trees will survive and later experience the viviparous germination. Based on the status of the trees and their seeds, the Program co-founders will issue NFT seeds periodically and plant them in the selected coastal areas around the world; 
        	Because of your respect and dedication, the “Planting Drifting Mangrove Seeds” program will significantly improve the coastal ecology worldwide, and mangroves can store carbon effectively and help mitigate the global greenhouse effect effectively and this is your special achievement. Thanks to your kindness, Mother Earth will have another stretch of mangroves and you will obtain the honor and privilege in the place where the mangroves grow. "
      />
      <SectionContent
        titleShow={true}
        title="Plans for Stable and Long-term Platform Operation"
        text="	Become the owner of an exquisite art program and participate in crypto art exhibitions worldwide in the future;
        	Holding 1 NFT is equivalent to claiming a mangrove seed. The Program co-founders will manage its germination and plant the seedling along the coast to grow and reproduce; 
        	A certain percentage of the mangrove trees will survive and later experience the viviparous germination. Based on the status of the trees and their seeds, the Program co-founders will issue NFT seeds periodically and plant them in the selected coastal areas around the world; 
        	Because of your respect and dedication, the “Planting Drifting Mangrove Seeds” program will significantly improve the coastal ecology worldwide, and mangroves can store carbon effectively and help mitigate the global greenhouse effect effectively and this is your special achievement. Thanks to your kindness, Mother Earth will have another stretch of mangroves and you will obtain the honor and privilege in the place where the mangroves grow. "
      />
      <SectionContent
        titleShow={true}
        title="Ecology Setup & Ecology Application"
        text="	Points Conversion Rules for Reducing Wind and Waves, Fortifying Dikes and Storing Carbon:  <br/> 
        1.	30 mangrove trees are calculated as a fragmented block, and 10 such blocks form one mangrove forest; reducing wind and waves and fortifying dikes are calculated as 100 points for every block;   
        2.	Carbon storage (blue carbon) is calculated on the basis of a single mangrove tree. One tree has 10 points per year. An average tree can store 4 to18 kg of carbon per year. The carbon storage capability of a mangrove is 5 to 6 times larger than that of a common tree. A mangrove can store up to 100 kg of carbon per year.
        	Mangrove NFT seeds can be resold, donated or auctioned to environmentalists, organizations or foundations for daily maintenance;
        	Based on the growth of mangrove seedlings and their reproduction, the Program co-founders will release another batch of mangrove NFT seeds. The total number of seeds to be issued will depend on the number of seeds produced by the surviving seedlings. The specific planting plan will conform to the community consensus. The planting area will be determined through a community-wide consultation mechanism, and the number of seeds to be issued will be subject to the actual demands in the designated coastal areas. The planting will be started as soon as the sale ends. "
      />
      <SectionContent
        titleShow={true}
        title="Ecology Construction & Promotion"
        text="Plant a mangrove, you can add a touch of green to the coastal area of Mother Earth, create a habitat for marine life, reduce an amount of “carbon” on earth, and help establish the global block community of mangrove advocates. We will make concerted effort to safeguard the mangrove ecosystems in the ocean blocks worldwide and launch new planting plans. In this way, the mangrove blocks worldwide can be substantially increased."
      />
    </div>
  )
}