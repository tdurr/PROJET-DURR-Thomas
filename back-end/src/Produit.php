<?php



/**
 * Produit
 */
class Produit
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string|null
     */
    private $name;

    /**
     * @var string|null
     */
    private $price;

    /**
     * @var string|null
     */
    private $brand;

    /**
     * @var string|null
     */
    private $category;

    /**
     * @var int|null
     */
    private $hp;

    /**
     * @var int|null
     */
    private $torque;

    /**
     * @var string|null
     */
    private $image;


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
     * Set name.
     *
     * @param string|null $name
     *
     * @return Produit
     */
    public function setName($name = null)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string|null
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set price.
     *
     * @param string|null $price
     *
     * @return Produit
     */
    public function setPrice($price = null)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price.
     *
     * @return string|null
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set brand.
     *
     * @param string|null $brand
     *
     * @return Produit
     */
    public function setBrand($brand = null)
    {
        $this->brand = $brand;

        return $this;
    }

    /**
     * Get brand.
     *
     * @return string|null
     */
    public function getBrand()
    {
        return $this->brand;
    }

    /**
     * Set category.
     *
     * @param string|null $category
     *
     * @return Produit
     */
    public function setCategory($category = null)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get category.
     *
     * @return string|null
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * Set hp.
     *
     * @param int|null $hp
     *
     * @return Produit
     */
    public function setHp($hp = null)
    {
        $this->hp = $hp;

        return $this;
    }

    /**
     * Get hp.
     *
     * @return int|null
     */
    public function getHp()
    {
        return $this->hp;
    }

    /**
     * Set torque.
     *
     * @param int|null $torque
     *
     * @return Produit
     */
    public function setTorque($torque = null)
    {
        $this->torque = $torque;

        return $this;
    }

    /**
     * Get torque.
     *
     * @return int|null
     */
    public function getTorque()
    {
        return $this->torque;
    }

    /**
     * Set image.
     *
     * @param string|null $image
     *
     * @return Produit
     */
    public function setImage($image = null)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get image.
     *
     * @return string|null
     */
    public function getImage()
    {
        return $this->image;
    }
}
