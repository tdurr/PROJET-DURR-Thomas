<?php



/**
 * Lignedecommande
 */
class Lignedecommande
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string|null
     */
    private $productname;

    /**
     * @var int|null
     */
    private $quantity;

    /**
     * @var string|null
     */
    private $lineamount;

    /**
     * @var \Commande
     */
    private $orderid;


    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set productname.
     *
     * @param string|null $productname
     *
     * @return Lignedecommande
     */
    public function setProductname($productname = null)
    {
        $this->productname = $productname;

        return $this;
    }

    /**
     * Get productname.
     *
     * @return string|null
     */
    public function getProductname()
    {
        return $this->productname;
    }

    /**
     * Set quantity.
     *
     * @param int|null $quantity
     *
     * @return Lignedecommande
     */
    public function setQuantity($quantity = null)
    {
        $this->quantity = $quantity;

        return $this;
    }

    /**
     * Get quantity.
     *
     * @return int|null
     */
    public function getQuantity()
    {
        return $this->quantity;
    }

    /**
     * Set lineamount.
     *
     * @param string|null $lineamount
     *
     * @return Lignedecommande
     */
    public function setLineamount($lineamount = null)
    {
        $this->lineamount = $lineamount;

        return $this;
    }

    /**
     * Get lineamount.
     *
     * @return string|null
     */
    public function getLineamount()
    {
        return $this->lineamount;
    }

    /**
     * Set orderid.
     *
     * @param \Commande|null $orderid
     *
     * @return Lignedecommande
     */
    public function setOrderid(\Commande $orderid = null)
    {
        $this->orderid = $orderid;

        return $this;
    }

    /**
     * Get orderid.
     *
     * @return \Commande|null
     */
    public function getOrderid()
    {
        return $this->orderid;
    }
}
