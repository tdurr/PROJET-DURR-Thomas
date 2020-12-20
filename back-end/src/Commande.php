<?php



/**
 * Commande
 */
class Commande
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var string|null
     */
    private $amount;

    /**
     * @var string|null
     */
    private $date;

    /**
     * @var string|null
     */
    private $loginclient;


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
     * Set amount.
     *
     * @param string|null $amount
     *
     * @return Commande
     */
    public function setAmount($amount = null)
    {
        $this->amount = $amount;

        return $this;
    }

    /**
     * Get amount.
     *
     * @return string|null
     */
    public function getAmount()
    {
        return $this->amount;
    }

    /**
     * Set date.
     *
     * @param string|null $date
     *
     * @return Commande
     */
    public function setDate($date = null)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date.
     *
     * @return string|null
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set loginclient.
     *
     * @param string|null $loginclient
     *
     * @return Commande
     */
    public function setLoginclient($loginclient = null)
    {
        $this->loginclient = $loginclient;

        return $this;
    }

    /**
     * Get loginclient.
     *
     * @return string|null
     */
    public function getLoginclient()
    {
        return $this->loginclient;
    }
}
