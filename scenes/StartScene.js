import Phaser from "phaser";
import OptionsScene from "./OptionsScene";
import GameScene from "./GameScene";

class StartScene extends Phaser.Scene {
  constructor() {
    super("StartScene");
  }

  create() {
    this.optionsScene = this.scene.get("OptionsScene");
    this.add
      .image(this.scale.width / 2, this.scale.height / 2, "manu-box")
      .setScale(this.scale.width / 500, (this.scale.height + 200) / 674);

    this.add
      .text(this.scale.width / 2, 180, "Welcome", {
        fontSize: 70,
        align: "center",
        lineSpacing: 8,
        color: "rgb(255,10,200)",
        fontFamily: "arial",
        fontStyle: "bold",
      })
      .setWordWrapWidth(600)
      .setOrigin(0.5);
    this.add
      .text(this.scale.width / 2, 300, "Play and win the prize!!!", {
        fontSize: 40,
        align: "center",
        lineSpacing: 8,
        color: "white",
        fontFamily: "arial",
        fontStyle: "bold",
      })
      .setWordWrapWidth(600)
      .setOrigin(0.5);
    this.btn = this.add
      .image(this.scale.width / 2, this.scale.height - 180, "btn")
      .setScale(0.5);
    this.playText = this.add
      .text(this.scale.width / 2, this.scale.height - 180, "Play", {
        fontSize: 40,
        align: "center",
        lineSpacing: 8,
        color: "black",
        fontFamily: "arial",
        fontStyle: "bold",
      })
      .setWordWrapWidth(600)
      .setOrigin(0.5);
    this.btn.on("pointerover", () => {
      this.playText.setColor("white");
    });
    this.btn.on("pointerout", () => {
      this.playText.setColor("balck");
    });

    this.btn.setInteractive({ cursor: "pointer" });
    this.btn.on("pointerdown", () => {
      this.scene.stop();
      this.scene.start("GameScene");
    });
  }

  update() {}
}

export default StartScene;
