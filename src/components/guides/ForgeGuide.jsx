import React, { useEffect } from "react";

const ForgeGuide = () => {
  //Change Title
  useEffect(() => {
    document.title = "SH Hero Guide -- Forge";

    return () => {
      document.title = "Soul Hunters Hero Guide";
    };
  }, []);

  return (
    <div className="wrapper">
      <section id="overview" className="guide-section">
        <div className="section-header">
          <h2>Forge Overview</h2>
        </div>

        <div className="intro-text">
          <p>
            The Forge is used to further enhance the Stats of Awakened Heroes.
            Once a player reaches Level 90 the Forge becomes available for use.
            It can only be used with Awakened Heroes, however, and will be of no
            use to the player until they complete their first Awakening Quest.
            Once a Hero is Awakened, the Forge can be used to boost the Stats of
            the Hero's Signature Item. Every Hero has 3 different Stats that may
            be boosted. Physical or Magic Attack, Physical Armor and Magic
            Armor. Once each of these Stats reaches a certain threshold, an
            additional Bonus Stat will be unlocked for that item. Once fully
            upgraded an Awakend Hero can receive the benefit of a total of 6
            Bonus Stats from the Forging process.
          </p>
        </div>

        <div className="example-image-box">
          <div className="example-image">
            <img
              src="/assets/images/icons/forge/forge-example2.jpg"
              width="300"
              alt="Screenshot of the Forge"
            />
            <p className="image-note">Forged Stats applied to Signature Item</p>
          </div>

          <div className="example-image">
            <img
              src="/assets/images/icons/forge/forge-example1.jpg"
              width="300"
              alt="Screenshot of the Forge"
            />
            <p className="image-note">Example: Bonus Stats unlocked</p>
          </div>
        </div>

        <div id="forge-bonus-example" className="statbox">
          <table>
            <tbody>
              <tr>
                <th colSpan="4">Forge Bonus Stats</th>
              </tr>
              <tr>
                <td>M. Attack</td>
                <td>≥ 40</td>
                <td>P. Armor</td>
                <td>
                  <span className="grn-txt">+30</span>
                </td>
              </tr>
              <tr>
                <td>P. Armor</td>
                <td>≥ 100</td>
                <td>M. Attack</td>
                <td>
                  <span className="grn-txt">+70</span>
                </td>
              </tr>
              <tr>
                <td>M. Armor</td>
                <td>≥ 200</td>
                <td>Max Health</td>
                <td>
                  <span className="grn-txt">+2000</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="intro-text">
          <p>
            As you can see in the examples, once the Magic Attack Stat gets
            forged to 40 or higher, the Physical Armor Bonus unlocks. Again,
            once the Physical Armor Stat reaches 100 the Magic Attack Bonus
            unlocks. The 3 Base Stats (P./M. Attack, P. Armor, M. Armor) can be
            forged to a max value of 200 once the Forge is fully upgraded, but
            the Bonus Stats will only be awarded at the listed value and cannot
            be increased.
          </p>
        </div>
      </section>

      <section id="upgrade" className="guide-section">
        <div className="section-header">
          <h2>Upgrading the Forge</h2>
        </div>

        <div className="intro-text">
          <p>
            Every time you use the Forge you will gain Experience based on the
            type of Forge used. The Experience will be awarded even if you
            discard the proposed upgrade, but the cost of Forging will not be
            refunded. The Max Stats that can be Forged are capped at various
            levels. A Level 1 Forge starts with an initial Stat Cap of 20. This
            means that a Signature Item's 3 Stats cannot be rasied above this
            cap. This is important to pay attention to especially when first
            gaining access to the Forge. It is possible to Max the Stats on your
            first Hero before reaching thexp needed to upgrade the Forge. If
            this occurs you will be stuck unable to use or level your Forge
            until you awaken a second Hero. As you level your Forge you will
            unlock an increased Stat Cap, new Forge Types and discounts to the
            Forging Cost.
          </p>
        </div>

        <div className="forge-table forge-upgrade-table">
          <h5>Leveling the Forge</h5>
          <table>
            <tbody>
              <tr>
                <th>
                  <b>Level</b>
                </th>
                <th>XP Req.</th>
                <th>Cost</th>
                <th>Bonus</th>
              </tr>
              <tr>
                <td>1</td>
                <td>- - -</td>
                <td>- - -</td>
                <td style={{ textAlign: "center" }}>- - -</td>
              </tr>
              <tr>
                <td>2</td>
                <td>20xp</td>
                <td>
                  5k{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Stat Cap Raised to 40</td>
              </tr>
              <tr>
                <td>3</td>
                <td>40xp</td>
                <td>
                  25k{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Basic Forge Cost -10%</td>
              </tr>
              <tr>
                <td>4</td>
                <td>70xp</td>
                <td>
                  30k{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Specialist Forge Unlocked</td>
              </tr>
              <tr>
                <td>5</td>
                <td>100xp</td>
                <td>
                  50k{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Stat Cap Raised to 60</td>
              </tr>
              <tr>
                <td>6</td>
                <td>150xp</td>
                <td>
                  70k{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Specialist Forge Cost -10%</td>
              </tr>
              <tr>
                <td>7</td>
                <td>200xp</td>
                <td>
                  120k{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Master Forge Unlocked</td>
              </tr>
              <tr>
                <td>8</td>
                <td>300xp</td>
                <td>
                  180k{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Stat Cap Raised to 80</td>
              </tr>
              <tr>
                <td>9</td>
                <td>400xp</td>
                <td>
                  250k{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Master Forge Cost -10%</td>
              </tr>
              <tr>
                <td>10</td>
                <td>600xp</td>
                <td>
                  320k{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Guru Forge Unlocked</td>
              </tr>
              <tr>
                <td>11</td>
                <td>800xp</td>
                <td>
                  500k{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Stat Cap Raised to 100</td>
              </tr>
              <tr>
                <td>12</td>
                <td>1,000xp</td>
                <td>
                  800k{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Guru Forge Cost -10%</td>
              </tr>
              <tr>
                <td>13</td>
                <td>1,300xp</td>
                <td>
                  1.0m{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Legendary Forge Unlocked</td>
              </tr>
              <tr>
                <td>14</td>
                <td>1,600xp</td>
                <td>
                  1.5m{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Stat Cap Raised to 120</td>
              </tr>
              <tr>
                <td>15</td>
                <td>1,900xp</td>
                <td>
                  2.5m{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Legendary Forge Cost -10%</td>
              </tr>
              <tr>
                <td>16</td>
                <td>2,300xp</td>
                <td>
                  3.5m{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Mystical Forge Unlocked</td>
              </tr>
              <tr>
                <td>17</td>
                <td>2,700xp</td>
                <td>
                  5.5m{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Stat Cap Raised to 140</td>
              </tr>
              <tr>
                <td>18</td>
                <td>3,100xp</td>
                <td>
                  7.5m{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Mystical Forge Cost -10%</td>
              </tr>
              <tr>
                <td>19</td>
                <td>3,600xp</td>
                <td>
                  9.5m{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Glorious Forge Unlocked</td>
              </tr>
              <tr>
                <td>20</td>
                <td>4,100xp</td>
                <td>
                  11.5m{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Stat Cap Raised to 170</td>
              </tr>
              <tr>
                <td>21</td>
                <td>4,600xp</td>
                <td>
                  13.5m{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Glorious Forge Cost -10%</td>
              </tr>
              <tr>
                <td>22</td>
                <td>5,200xp</td>
                <td>
                  15.5m{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Ultimate Forge Unlocked</td>
              </tr>
              <tr>
                <td>23</td>
                <td>5,800xp</td>
                <td>
                  17.5m{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Stat Cap Raised to 200</td>
              </tr>
              <tr>
                <td>24</td>
                <td>6,400xp</td>
                <td>
                  19.5m{" "}
                  <img
                    src="/assets/images/icons/forge/gold.png"
                    alt=""
                    width="16"
                    height="16"
                  />
                </td>
                <td>Ultimate Forge Cost -10%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="intro-text">
          <p>
            Level 24 is the Max Level for the Forge. You can, however, continue
            to feed it another 7,100xp. Overhead for all upgrades is 110.85
            Million{" "}
            <img
              src="/assets/images/icons/forge/gold.png"
              alt=""
              width="16"
              height="16"
            />{" "}
            and 46,280xp (does not include the 7,100xp to cap the Forge). If
            only using Basic Forges to earn the necessaryxp it will cost a total
            of 943.67 Million{" "}
            <img
              src="/assets/images/icons/forge/gold.png"
              alt=""
              width="16"
              height="16"
            />{" "}
            to max the Forge. That's right almost 1 Billion{" "}
            <img
              src="/assets/images/icons/forge/gold.png"
              alt=""
              width="16"
              height="16"
            />{" "}
            to max the Forge!! Of course every 22 Hours you are able to use a
            Free Forge of any type to help reduce the total amount ofxp and
            therefore it will actually cost less. If you plan on capping the
            Forge out at Level 24 in will cost an additional 127.8 Million{" "}
            <img
              src="/assets/images/icons/forge/gold.png"
              alt=""
              width="16"
              height="16"
            />
            , bringing the grand total to over 1.07 Billion{" "}
            <img
              src="/assets/images/icons/forge/gold.png"
              alt=""
              width="16"
              height="16"
            />
            !!!
          </p>
        </div>

        <div className="intro-text">
          <p>
            The Forge also requires you to Awaken a certain number of Heroes to
            upgarde to certain levels. Below is a table of the number of Heroes
            required for these levels.
          </p>
        </div>

        <div className="forge-table">
          <h5>Awakened Heroes Needed</h5>
          <table>
            <tbody>
              <tr>
                <th>Forge Level</th>
                <th>Heroes Req.</th>
              </tr>
              <tr>
                <td>8</td>
                <td>2</td>
              </tr>
              <tr>
                <td>11</td>
                <td>3</td>
              </tr>
              <tr>
                <td>14</td>
                <td>4</td>
              </tr>
              <tr>
                <td>17</td>
                <td>5</td>
              </tr>
              <tr>
                <td>20</td>
                <td>6</td>
              </tr>
              <tr>
                <td>23</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="use" className="guide-section">
        <div className="section-header">
          <h2>Using the Forge</h2>
        </div>

        <div className="intro-text">
          <p>
            When you use the Forge to upgrade an item, it will show you the
            Bonus and you can then choose to apply it or leave and discard it.
            Once an item reaches a certain amount of Stats, there will be a
            chance to receive a negative value. When this happens if you apply
            the Forged Bonus the corresponding Stat will be reduced in value.
            There is also a chance the Stat will remain unchanged. If you apply
            a negative result that causes a Stat to go below the required value
            to receive a Bonus, you will lose the Bonus until you Forge the item
            back to the required value.
          </p>
        </div>

        <div className="example-image-box">
          <div className="example-image">
            <img
              src="/assets/images/icons/forge/forge-example3.jpg"
              alt="Screenshot of the Forge being used"
              width="300"
            />
            <p className="image-note">Example: 2 Positives and 1 Unchanged</p>
          </div>

          <div className="example-image">
            <img
              src="/assets/images/icons/forge/forge-example4.jpg"
              alt="Screenshot of the Forge being used"
              width="300"
            />
            <p className="image-note">Example: 2 Negatives and 1 Positive</p>
          </div>
        </div>

        <div className="intro-text">
          <p>
            Below is a table that lists the various Forge Types along with the
            Cost per Forge and the Maximum Potential Stat Gain per Forge. Forge
            Costs are listed without discounts. At Level 24 all Forge Types will
            cost 10% less. The Max Stat Increase shows the highest potential
            value per Forge an item can have applied to each of the 3 Base
            Stats. The actual values you recieve may be anything up to that max
            value. Every Forge Type will produce only positive values until a
            Stat equals a certain value. It then will start prodcuing positive
            and negative values equally. Finally, at a second breakpoint it will
            produce mostly negative values. Every 22 Hours the Forge can be used
            for Free. Most importantly, you can use any Forge Type with this
            Free Forge. Even the Ultimate Forge!
          </p>
        </div>

        <div className="intro-table">
          <div className="forge-type-table">
            <h5>Cost to Forge</h5>
            <table>
              <tbody>
                <tr>
                  <th>Type</th>
                  <th>XP Gained</th>
                  <th>Cost</th>
                  <th>Max Stat Increase</th>
                </tr>
                <tr>
                  <td>Basic</td>
                  <td>1xp</td>
                  <td>
                    20k{" "}
                    <img
                      src="/assets/images/icons/forge/gold.png"
                      alt=""
                      width="16"
                      height="16"
                    />
                  </td>
                  <td>
                    <span className="grn-txt">+2/2/2</span>
                  </td>
                </tr>
                <tr>
                  <td>Specialist</td>
                  <td>4xp</td>
                  <td>
                    20{" "}
                    <img
                      src="/assets/images/icons/forge/diamond.png"
                      alt=""
                      width="16"
                      height="16"
                    />
                  </td>
                  <td>
                    <span className="grn-txt">+3/3/3</span>
                  </td>
                </tr>
                <tr>
                  <td>Master</td>
                  <td>15xp</td>
                  <td>
                    50{" "}
                    <img
                      src="/assets/images/icons/forge/diamond.png"
                      alt=""
                      width="16"
                      height="16"
                    />
                  </td>
                  <td>
                    <span className="grn-txt">+4/4/4</span>
                  </td>
                </tr>
                <tr>
                  <td>Guru</td>
                  <td>40xp</td>
                  <td>
                    100{" "}
                    <img
                      src="/assets/images/icons/forge/diamond.png"
                      alt=""
                      width="16"
                      height="16"
                    />
                  </td>
                  <td>
                    <span className="grn-txt">+5/5/5</span>
                  </td>
                </tr>
                <tr>
                  <td>Legendary</td>
                  <td>75xp</td>
                  <td>
                    150{" "}
                    <img
                      src="/assets/images/icons/forge/diamond.png"
                      alt=""
                      width="16"
                      height="16"
                    />
                  </td>
                  <td>
                    <span className="grn-txt">+6/6/6</span>
                  </td>
                </tr>
                <tr>
                  <td>Mystic</td>
                  <td>120xp</td>
                  <td>
                    200{" "}
                    <img
                      src="/assets/images/icons/forge/diamond.png"
                      alt=""
                      width="16"
                      height="16"
                    />
                  </td>
                  <td>
                    <span className="grn-txt">+7/7/7</span>
                  </td>
                </tr>
                <tr>
                  <td>Glorious</td>
                  <td>200xp</td>
                  <td>
                    250{" "}
                    <img
                      src="/assets/images/icons/forge/diamond.png"
                      alt=""
                      width="16"
                      height="16"
                    />
                  </td>
                  <td>
                    <span className="grn-txt">+8/8/8</span>
                  </td>
                </tr>
                <tr>
                  <td>Ultimate</td>
                  <td>300xp</td>
                  <td>
                    300{" "}
                    <img
                      src="/assets/images/icons/forge/diamond.png"
                      alt=""
                      width="16"
                      height="16"
                    />
                  </td>
                  <td>
                    <span className="grn-txt">+9/9/9</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="forge-type-table forge-range-table">
            <h5>Positive / Negative Stat Ranges</h5>
            <table>
              <tbody>
                <tr>
                  <th>Type</th>
                  <th>Pos. Only</th>
                  <th>Pos. / Neg.</th>
                  <th>Mostly Neg.</th>
                </tr>
                <tr>
                  <td>Basic</td>
                  <td>20</td>
                  <td>40</td>
                  <td>40+</td>
                </tr>
                <tr>
                  <td>Specialist</td>
                  <td>40</td>
                  <td>60</td>
                  <td>60+</td>
                </tr>
                <tr>
                  <td>Master</td>
                  <td>60</td>
                  <td>80</td>
                  <td>80+</td>
                </tr>
                <tr>
                  <td>Guru</td>
                  <td>80</td>
                  <td>100</td>
                  <td>100+</td>
                </tr>
                <tr>
                  <td>Legendary</td>
                  <td>100</td>
                  <td>120</td>
                  <td>120+</td>
                </tr>
                <tr>
                  <td>Mystic</td>
                  <td>120</td>
                  <td>140</td>
                  <td>140+</td>
                </tr>
                <tr>
                  <td>Glorious</td>
                  <td>140</td>
                  <td>160</td>
                  <td>160+</td>
                </tr>
                <tr>
                  <td>Ultimate</td>
                  <td>160</td>
                  <td>180</td>
                  <td>180+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgeGuide;
